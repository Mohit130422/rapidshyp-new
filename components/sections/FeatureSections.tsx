import { featureSections } from "@/data/features";
import type { FeatureSection as FeatureSectionType } from "@/types";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";
import FeatureVisual from "@/components/ui/FeatureVisual";

function Heading({ title, accent }: { title: string; accent?: string }) {
  if (accent && title.startsWith(accent)) {
    const rest = title.slice(accent.length);
    return (
      <h3 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
        <span className="text-gradient-brand">{accent}</span>
        {rest}
      </h3>
    );
  }
  return <h3 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h3>;
}

function FeatureSection({ feature }: { feature: FeatureSectionType }) {
  const { title, accent, description, tags, cta, visual, badge } = feature;
  return (
    <div className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <FeatureVisual name={visual} />
      </Reveal>
      <Reveal delay={120}>
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-brand-300 px-4 py-1 text-xs font-semibold text-brand-700">
            {badge}
          </span>
        )}
        <Heading title={title} accent={accent} />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {tags.map((t: string) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft"
            >
              <Icon.checkCircle className="h-4 w-4 text-emerald-500" />
              {t}
            </span>
          ))}
        </div>
        <div className="mt-7">
          <Button href={cta.href} variant="primary" size="md" icon={<Icon.arrowUpRight className="h-4 w-4" />}>
            {cta.label}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export default function FeatureSections() {
  return (
    <section className="bg-white">
      <div className="container-x divide-y divide-line/60">
        {featureSections.map((feature) => (
          <FeatureSection key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
