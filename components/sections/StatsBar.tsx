import { stats, brandStrip } from "@/data/hero";

export default function StatsBar() {
  // Two identical copies -> translateX(-50%) loops seamlessly.
  // Each logo carries a trailing margin so the wrap point stays even.
  const track = [...brandStrip.brands, ...brandStrip.brands];

  return (
    <section className="border-y">
      <div className="container-x border-b border-line">
        {/* Stats */}
        <div className="grid grid-cols-2  gap-y-6 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-line">
          {stats.map((s) => (
            <div key={s.value + s.label} className="px-2 lg:px-6">
              <p className="text-xl font-extrabold text-gradient-brand sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        {/* Brand marquee */}
        <div className="flex flex-col gap-6  py-7 lg:flex-row lg:items-center lg:gap-10">
          <p className="max-w-xs shrink-0 text-center text-xs leading-relaxed text-muted lg:text-left">
            {brandStrip.note}
          </p>

          {/* marquee-mask -> pause on hover; mask -> soft fade at both edges */}
          <div className="marquee-mask relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="marquee-track flex w-max items-center">
              {track.map((brand, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${brand.name}-${i}`}
                  src={brand.logo}
                  alt={brand.name}
                  aria-hidden={i >= brandStrip.brands.length}
                  className="mr-14 h-12 w-auto shrink-0 object-contain transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
