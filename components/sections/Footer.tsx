import Link from "next/link";
import { footerColumns, footerTagline, socials } from "@/data/navigation";
import { Logo } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-1 text-xs font-medium text-muted">We Deliver Growth</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{footerTagline}</p>
            <p className="mt-6 text-sm font-semibold text-ink">Follow us</p>
            <div className="mt-3 flex gap-3">
              {socials.map((s) => {
                const Ico = Icon[s] || Icon.arrowUpRight;
                return (
                  <Link
                    key={s}
                    href="#"
                    aria-label={s}
                    className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-brand-300 hover:text-brand-700"
                  >
                    <Ico className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-bold text-ink">{col.title}</h4>
                <div className="mt-4 space-y-4">
                  {col.groups.map((g, gi) => (
                    <div key={g.heading || gi}>
                      {g.heading && (
                        <p className="text-[13px] font-semibold text-ink">{g.heading}</p>
                      )}
                      <ul className={`${g.heading ? "mt-2" : ""} space-y-1.5`}>
                        {g.links.map((l) => (
                          <li key={l}>
                            <Link href="#" className="text-[13px] text-muted transition hover:text-brand-700">
                              {l}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-muted">
          All Rights Reserved @RapidShyp{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
