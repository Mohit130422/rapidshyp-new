import { mobileApp } from "@/data/sections";
import { Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";
import PhoneMock from "@/components/ui/PhoneMock";
import Link from "next/link";

export default function MobileApp() {
  return (
    <section className="bg-surface-muted py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {mobileApp.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {mobileApp.description}
          </p>

          <p className="mt-8 text-sm font-semibold text-ink">{mobileApp.downloadNote}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {mobileApp.stores.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-white transition hover:opacity-90"
              >
                {s.label === "App Store" ? <Icon.apple className="h-6 w-6" /> : <Icon.play className="h-6 w-6" />}
                <span className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-white/60">{s.caption}</span>
                  <span className="block text-sm font-semibold">{s.label}</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto flex items-center justify-center gap-4">
            {/* QR */}
            <div className="hidden rounded-2xl bg-white p-3 shadow-card sm:block">
              <div className="grid h-28 w-28 place-items-center rounded-lg bg-surface-muted text-brand-700">
                <Icon.qr className="h-20 w-20" />
              </div>
              <div className="mt-2 rounded-md bg-brand-800 py-1 text-center text-[11px] font-semibold text-white">
                {mobileApp.scanLabel}
              </div>
            </div>
            <PhoneMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
