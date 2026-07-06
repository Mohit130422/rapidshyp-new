import { blog } from "@/data/sections";
import type { BlogPost } from "@/types";
import { Reveal } from "@/components/ui/Primitives";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

/* WordPress REST API (public, no auth). `_embed` gives us the featured image,
   author and category in one call. Cached + refreshed hourly via ISR. */
const WP_ENDPOINT =
  "https://rapidshyp.com/blog/wp-json/wp/v2/posts?_embed&per_page=10";
const FALLBACK_IMG =
  "https://storage.googleapis.com/rapidshyp-website-cdn/temp/post1.png";

/* ── helpers (port of the old vanilla-JS logic) ─────────────────── */
function stripHtml(s: string) {
  return s.replace(/<[^>]+>/g, "");
}
function decodeEntities(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&#8217;|&#8216;|&apos;/g, "'")
    .replace(/&#8211;|&#8212;/g, "–")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&nbsp;/g, " ");
}
function clean(s: string) {
  return decodeEntities(stripHtml(s)).trim();
}
function formatDate(iso: string) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/* Minimal shape of the bits we read from the WP response */
type WpPost = {
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  link?: string;
  date?: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string }[];
    "wp:term"?: { name?: string }[][];
  };
};

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(WP_ENDPOINT, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data: WpPost[] = await res.json();
    return data.map((p) => ({
      title: clean(p.title?.rendered || "Untitled"),
      excerpt: clean(p.excerpt?.rendered || "").slice(0, 120) + "…",
      date: formatDate(p.date || ""),
      link: p.link || "#",
      image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMG,
      tag: p._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
    }));
  } catch (err) {
    console.error("Failed to load blog posts:", err);
    return [];
  }
}

export default async function Blog() {
  const posts = await getPosts();

  // Live API data when available; otherwise fall back to static placeholders.
  const featured: BlogPost = posts[0] ?? blog.featured;
  const list: BlogPost[] = posts.length ? posts.slice(1, 4) : blog.posts;

  const featImg = featured.image || FALLBACK_IMG;
  const featHref = featured.link || blog.viewAll.href;

  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <Reveal>
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{blog.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{blog.description}</p>
            </div>
            <a
              href={blog.viewAll.href}
              className="hidden shrink-0 items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-300 sm:inline-flex"
            >
              {blog.viewAll.label}
              <Icon.arrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Featured */}
          <Reveal>
            <a href={featHref} target="_blank" rel="noopener noreferrer" className="group relative block h-[360px] overflow-hidden rounded-[var(--radius-card)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featImg}
                alt={featured.title}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
                {featured.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">{featured.title}</h3>
                <p className="mt-1 text-sm text-white/80">{featured.excerpt}</p>
                <p className="mt-3 text-xs text-white/60">{featured.date}</p>
              </div>
            </a>
          </Reveal>

          {/* List */}
          <div className="flex flex-col justify-between gap-5">
            {list.map((post, i) => (
              <Reveal key={i} delay={i * 70}>
                <a href={post.link || blog.viewAll.href} target="_blank" rel="noopener noreferrer" className="group flex gap-4">
                  <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image || FALLBACK_IMG} alt={post.title} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-semibold text-brand-600">
                      {post.tag}
                    </span>
                    <h3 className="mt-1.5 text-sm font-bold text-ink transition group-hover:text-brand-700">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{post.excerpt}</p>
                    <p className="mt-1.5 text-[11px] text-muted">{post.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}