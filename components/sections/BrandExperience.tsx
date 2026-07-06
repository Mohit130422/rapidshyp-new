import { brandExperience } from "@/data/sections";
import { Eyebrow, Reveal } from "@/components/ui/Primitives";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function BrandExperience() {
  const { whatsapp, tracking } = brandExperience.cards;
  return (
    <section className="bg-surface-muted py-20 pb-0">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow className="mb-3">{brandExperience.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {brandExperience.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {brandExperience.description}
          </p>
          <div className="mt-7">
            <Button href={brandExperience.cta.href} variant="primary" size="md">
              {brandExperience.cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto h-[400px] w-full max-w-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brandExperience.image}
              alt="Customer engaging with branded post-purchase experience"
              className="h-full w-full rounded-[var(--radius-card)] object-contain"
            />

            {/* WhatsApp chip */}
            <div className="absolute right-2 top-8 w-[210px] rounded-2xl bg-white p-3 shadow-card">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
                  <Icon.phone className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-ink">{whatsapp.title}</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">{whatsapp.note}</p>
              <span className="mt-2 inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                {whatsapp.metric}
              </span>
            </div>

            {/* Branded tracking chip */}
            <div className="absolute bottom-10 left-0 w-[220px] rounded-2xl bg-white p-3 shadow-card">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-amber-accent/20 text-orange-accent">
                  <Icon.target className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-ink">{tracking.title}</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">{tracking.note}</p>
              <span className="mt-2 inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                {tracking.metric}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}