"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import type { FeatureSection } from "@/types";
import { unifiedPlatform, featureSections } from "@/data/features";
import { Eyebrow } from "@/components/ui/Primitives";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

/* ─── data / easing ─────────────────────────────────────────────── */
const items = featureSections;
const N = items.length;
const easeOut: [number, number, number, number] = [0.25, 1, 0.5, 1];
const springSoft = { type: "spring", stiffness: 240, damping: 28 } as const;

/* ─── scroll timeline over the pinned wrapper ───────────────────────
   0 .......... FAN_END : fan stack sits, cards hoverable
   FAN_END .... LAND_END: front card slides down-left; other 4 rise up
   LAND_END ... 1        : carousel — remaining cards cycle one by one   */
const FAN_END  = 0.14;
const LAND_END = 0.32;
const C_END    = 0.94;
const PINNED_VH = (N + 4) * 100;

/* ─── fan geometry ──────────────────────────────────────────────────
   Front card (i0) sits left-of-centre; each next card steps right + up,
   so the whole stack cascades diagonally across the page like the PNG
   (instead of bunching in the middle). */
const FAN_DX = 130;   // wider horizontal step  → real cascade
const FAN_DY = 58;    // vertical rise per step
const FAN_TILT = -14;
const FAN_OFF_X = -220; // anchor the front card left of centre
const FAN_OFF_Y = -20;
const CARD_W = 300;
const CARD_MT = -120; // ~ half card height, for centring

/* carousel resting spot of the active card (from viewport centre) */
const CARD_X = -350;
const CARD_Y = 70;

function fanSlot(i: number) {
  return {
    x: i * FAN_DX + FAN_OFF_X,
    y: -i * FAN_DY + FAN_OFF_Y,
    rotateY: FAN_TILT,
    scale: 1 - i * 0.03,
    z: N - i,
  };
}

/* ─── the visual card: white card, title on top, product image below ── */
function Card({ item }: { item: FeatureSection }) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] bg-white p-4 shadow-card ring-1 ring-line/60">
      <h3 className="mb-3 px-1 text-lg font-bold text-ink">{item.name}</h3>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full rounded-xl object-cover"
        style={{ aspectRatio: "4 / 5" }}
      />
    </div>
  );
}

/* ─── Step 1: hoverable fan card (straighten + lift on hover) ────── */
function StackCard({
  index, item, hovered, setHovered,
}: {
  index: number;
  item: FeatureSection;
  hovered: number;
  setHovered: (i: number) => void;
}) {
  const slot = fanSlot(index);
  const isHover = hovered === index;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer [transform-style:preserve-3d]"
      style={{ width: CARD_W, marginLeft: -CARD_W / 2, marginTop: CARD_MT, zIndex: isHover ? 999 : slot.z }}
      initial={{ opacity: 0, x: slot.x, y: slot.y + 30, scale: slot.scale * 0.92, rotateY: slot.rotateY }}
      animate={
        isHover
          ? { opacity: 1, x: slot.x, y: slot.y - 22, scale: slot.scale + 0.06, rotateY: 0 }
          : { opacity: 1, x: slot.x, y: slot.y, scale: slot.scale, rotateY: slot.rotateY }
      }
      transition={{ ...springSoft, opacity: { duration: 0.5, delay: index * 0.05 } }}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered(-1)}
    >
      <Card item={item} />
    </motion.div>
  );
}

/* ─── Showcase (desktop, scroll-driven) ─────────────────────────── */
function Showcase() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"fan" | "move" | "carousel">("fan");
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(-1);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  const colP = useTransform(scrollYProgress, [FAN_END, LAND_END], [0, 1], { clamp: true });

  const f0 = fanSlot(0);
  const frontX  = useTransform(colP, [0, 1], [f0.x, CARD_X]);
  const frontY  = useTransform(colP, [0, 1], [f0.y, CARD_Y]);
  const frontS  = useTransform(colP, [0, 1], [f0.scale, 1]);
  const frontRY = useTransform(colP, [0, 1], [f0.rotateY, 0]);

  const restY  = useTransform(colP, [0, 1], [0, -520]);
  const restOp = useTransform(colP, [0, 0.7], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v < FAN_END ? "fan" : v < LAND_END ? "move" : "carousel";
    if (next !== phase) setPhase(next);
    if (next === "carousel") {
      const p = Math.min(1, Math.max(0, (v - LAND_END) / (C_END - LAND_END)));
      const idx = Math.min(N - 1, Math.round(p * (N - 1)));
      if (idx !== active) setActive(idx);
    } else if (active !== 0) {
      setActive(0);
    }
  });

  const cardActive = phase === "carousel" ? active : 0;
  const current = items[active];
  const CurIcon = Icon[current.icon] || Icon.box;

  return (
    <div ref={wrapRef} className="relative bg-white" style={{ height: `${PINNED_VH}vh` }}>
      {/* clean sticky stage — NO heading behind it */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white [perspective:1500px]">

        {/* STEP 1 — hoverable fan stack */}
        {phase === "fan" &&
          items.map((it, i) => (
            <StackCard key={it.id} index={i} item={it} hovered={hovered} setHovered={setHovered} />
          ))}

        {/* STEP 2 — travel + carousel */}
        {phase !== "fan" && (
          <>
            {/* back 4 cards rise up + fade (feels like the page scrolled) */}
            {phase === "move" && (
              <motion.div className="absolute inset-0" style={{ y: restY, opacity: restOp }}>
                {items.map((it, i) => {
                  if (i === 0) return null;
                  const s = fanSlot(i);
                  return (
                    <div
                      key={it.id}
                      className="absolute left-1/2 top-1/2"
                      style={{ width: CARD_W, marginLeft: -CARD_W / 2, marginTop: CARD_MT, zIndex: s.z }}
                    >
                      <div style={{ transform: `translate(${s.x}px, ${s.y}px) rotateY(${s.rotateY}deg) scale(${s.scale})` }}>
                        <Card item={it} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* front card — persistent element (move → carousel), scroll-linked */}
            <motion.div
              className="absolute left-1/2 top-1/2 [transform-style:preserve-3d] w-[400px] mt-[-310px] ml-[20px] -translate-x-1/2"
              style={{
                x: frontX, y: frontY, scale: frontS, rotateY: frontRY, zIndex: 60,
              }}
            >
              {/* visual swaps per slide — SLIDE ONLY, never fades */}
              <motion.div
                key={cardActive}
                initial={cardActive === 0 ? { y: 0 } : { y: 44 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <Card item={items[cardActive]} />
              </motion.div>
            </motion.div>

            {/* right-side content — never scroll-fades (opacity stays 1) */}
            {phase === "carousel" && (
              <div
                className="absolute top-1/2"
                style={{ left: "calc(50% + 150px)", width: "min(400px, 38vw)", transform: "translateY(-50%)" }}
              >
                <motion.div initial={{ x: 26 }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: easeOut }}>
                  <div className="mb-5 flex items-center gap-3 text-xs font-semibold text-brand-500">
                    <span className="tabular-nums">{String(active + 1).padStart(2, "0")}</span>
                    <span className="h-px w-8 bg-brand-200" />
                    <span className="tabular-nums text-muted">{String(N).padStart(2, "0")}</span>
                  </div>

                  {/* text swaps SLIDE ONLY (opacity stays 1) */}
                  <motion.div key={active} initial={{ y: 26 }} animate={{ y: 0 }} transition={{ duration: 0.4, ease: easeOut }}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <CurIcon className="h-5 w-5" />
                      </span>
                      <h3 className="text-2xl font-bold text-ink">{current.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{current.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {current.tags.slice(0, 5).map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft">
                          <Icon.checkCircle className="h-3.5 w-3.5 text-emerald-500" />
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button href={current.cta.href} variant="primary" size="md">{current.cta.label}</Button>
                    </div>
                  </motion.div>

                  <div className="mt-8 flex gap-1.5">
                    {items.map((_, i) => (
                      <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-brand-700" : "w-1.5 bg-line"}`} />
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ─── mobile / reduced-motion fallback ──────────────────────────── */
function SimpleStack() {
  return (
    <div className="space-y-10">
      {items.map((it, i) => {
        const ItIcon = Icon[it.icon] || Icon.box;
        return (
          <motion.div
            key={it.id}
            className="grid gap-6 sm:grid-cols-2 sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card item={it} />
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600"><ItIcon className="h-5 w-5" /></span>
                <h3 className="text-lg font-bold text-ink">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.description}</p>
              <div className="mt-4"><Button href={it.cta.href} variant="primary" size="sm">{it.cta.label}</Button></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function UnifiedPlatform() {
  const reduce = useReducedMotion();
  return (
    <section id="product" className="bg-white">
      {/* heading — normal flow, scrolls up & away (nothing stays behind the carousel) */}
      <div className="container-x pt-24 pb-6">
        <Eyebrow className="mb-3">{unifiedPlatform.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl xl:text-[3.25rem]">
          {unifiedPlatform.title.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
          {unifiedPlatform.description}
        </p>
      </div>

      {reduce ? (
        <div className="container-x pb-16">
          <SimpleStack />
        </div>
      ) : (
        <>
          <div className="hidden lg:block"><Showcase /></div>
          <div className="container-x pb-16 lg:hidden"><SimpleStack /></div>
        </>
      )}
    </section>
  );
}