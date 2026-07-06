import { aiMap } from "@/data/hero";
import { SectionHeading, Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";

function SideList({
  label,
  items,
  align,
}: {
  label: string;
  items: string[];
  align: "left" | "right";
}) {
  const right = align === "right";
  return (
    <div className={`flex flex-col gap-3 ${right ? "items-start" : "items-end"}`}>
      <span className="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-soft">
        {label}
      </span>
      <div className="flex flex-col gap-2.5">
        {items.map((it: string) => (
          <span
            key={it}
            className="rounded-xl border border-line bg-white px-4 py-2 text-xs font-bold text-ink shadow-soft"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AyumiMap() {
  return (
    <section id="solutions" className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading title={aiMap.title} description={aiMap.description} />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            {/* Channels (left) */}
            <div className="hidden justify-end lg:flex">
              <SideList label="Channels" items={aiMap.channels} align="left" />
            </div>

            {/* Ayumi center */}
            <div className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center">
              <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-rose-200/50 via-brand-100/40 to-orange-accent/30 blur-2xl" />
              <div className="spin-slow absolute h-[260px] w-[260px] rounded-full border border-dashed border-line" />

              {/* orbiting capability icons */}
              {[Icon.sparkle, Icon.truck, Icon.box, Icon.shield, Icon.smile, Icon.bolt, Icon.pin, Icon.chart].map(
                (Ico, i, arr) => {
                  const ang = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
                  const r = 140;
                  return (
                    <span
                      key={i}
                      className="absolute grid h-9 w-9 place-items-center rounded-full bg-white text-brand-600 shadow-soft"
                      style={{ transform: `translate(${Math.cos(ang) * r}px, ${Math.sin(ang) * r}px)` }}
                    >
                      <Ico className="h-4 w-4" />
                    </span>
                  );
                }
              )}

              {/* robot face */}
              <div className="relative z-10 grid h-32 w-32 place-items-center rounded-[2rem] bg-gradient-to-br from-rose-200 to-brand-200 shadow-card">
                <div className="grid h-20 w-24 place-items-center rounded-2xl bg-ink">
                  <span className="font-display text-lg font-extrabold text-gradient-brand">Ayumi</span>
                </div>
              </div>
              <span className="absolute -top-2 text-[11px] font-medium text-muted">{aiMap.capabilityNote}</span>
            </div>

            {/* Couriers (right) */}
            <div className="hidden lg:flex">
              <SideList label="Couriers" items={aiMap.couriers} align="right" />
            </div>

            {/* mobile chips */}
            <div className="flex flex-wrap justify-center gap-2 lg:hidden">
              {[...aiMap.channels, ...aiMap.couriers].map((it) => (
                <span key={it} className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-bold text-ink">
                  {it}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
