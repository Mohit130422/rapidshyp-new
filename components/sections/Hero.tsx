import { hero } from "@/data/hero";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Primitives";
import type { ReactNode } from "react";
import Image from "next/image";

function Chip({
  children,
  className = "",
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 text-xs font-semibold text-ink shadow-soft backdrop-blur ${className}`}
    >
      {icon}
      {children}
    </div>
  );
}

export default function Hero() {
  const c = hero.chips;
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT — copy */}
        <Reveal>
          <span className="inline-block rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            {hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.2] text-ink sm:text-5xl xl:text-5xl ">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink">
            {hero.description}
          </p>
          <div className="mt-8">
            <Button
              href={hero.cta.href}
              variant="primary"
              size="lg"
              icon={<Icon.arrowUpRight className="h-4 w-4" />}
            >
              {hero.cta.label}
            </Button>
          </div>
        </Reveal>

        {/* RIGHT — collage */}
        <Reveal delay={150}>
          <div className="relative mx-auto h-[460px] w-full max-w-xl">
            <Image
              src={hero.image}
              alt={hero.title[0]}
              fill
              sizes="100vw"
              quality={100}
              className="object-contain"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
