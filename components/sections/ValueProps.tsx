import { valueProps } from "@/data/hero";
import Icon from "@/components/ui/Icon";
import { SectionHeading, Reveal } from "@/components/ui/Primitives";
import Image from "next/image";

export default function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={valueProps.eyebrow}
            title={valueProps.title}
            description={valueProps.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.cards.map((card, i) => {
            const IconCmp = Icon[card.icon] || Icon.target;
            return (
              <Reveal key={card.title} delay={i * 80}>
                <div className="h-full rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Image src={card.icon} alt={card.title} className="h-6 w-6 object-contain" width={24} height={24} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
