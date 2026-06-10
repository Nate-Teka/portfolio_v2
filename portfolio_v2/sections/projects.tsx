import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    t: "Nova Dashboard",
    u: "nova-app.vercel.app",
    d: "A real-time analytics dashboard with live charts, dark mode, and a polished component system.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    t: "Trailmate",
    u: "trailmate.app",
    d: "A cross-platform hiking companion app — offline maps, GPS tracking, and trip logging.",
    tags: ["React Native", "Kotlin", "Maps API"],
    live: "#",
    code: "#",
  },
  {
    t: "DevNotes",
    u: "devnotes.io",
    d: "A markdown-first note app for developers with code blocks, tags, and instant search.",
    tags: ["React", "Python", "FastAPI"],
    live: "#",
    code: "#",
  },
  {
    t: "PixelShop",
    u: "pixelshop.store",
    d: "A headless e-commerce storefront with cart, checkout flow, and Stripe payments.",
    tags: ["Next.js", "Stripe", "TypeScript"],
    live: "#",
    code: "#",
  },
];
const secKicker =
  "my-4 space-x-2 text-(--accent-2) before:mr-2 before:mb-1 before:inline-block before:h-px before:w-8.5 before:bg-(--accent-2) before:align-middle before:content-[''] tracking-wider";
export default function ProjectsSection() {
  return (
    <section className="block alt w-full py-24 bg-(--bg-2)" id="projects">
      <div className="wrap space-y-4">
        <div className="sec-head reveal space-y-2">
          <div className={`${secKicker} sec-kicker mono tracking-wider`}>03 — projects.map()</div>
          <h2 className="sec-title text-[clamp(2rem,4vw,2.9rem)] font-bold">Selected work</h2>
          <p className="sec-sub text-(--muted)">A few of the things I've built:</p>
        </div>
        <div className="proj-grid reveal grid lg:grid-cols-2 gap-4" id="projGrid">
          {PROJECTS.map((p) => (
            <div
              key={p.t}
              className="proj-card space-y-4 border border-(--line) rounded-xl bg-(--panel)"
            >
              <div className="proj-preview ">
                <div className="url-link flex items-center gap-2 rounded-tl-xl rounded-tr-xl bg-(--bg) p-4">
                  <div className="dots flex gap-1.5">
                    <i className="w-2.5 h-2.5 bg-red-400 rounded-full"></i>
                    <i className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></i>
                    <i className="w-2.5 h-2.5 bg-green-400 rounded-full"></i>
                  </div>
                  <div className="proj-link p-1.5 border bg-(--panel) border-(--line) tracking-wide rounded-sm text-(--muted-2) text-center text-sm grow ">
                    <a href={p.u}>{p.u}</a>
                  </div>
                </div>
                <div className="proj-screenshot  overflow-hidden">
                  <div className="ph-in">
                    <div className="ph-ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        
                      >
                        <rect x="3" y="4" width="18" height="15" rx="2" />
                        <circle cx="8.5" cy="9" r="1.6" />
                        <path d="m4 17 5-4 4 3 3-2 4 3" />
                      </svg>
                    </div>
                    <div className="ph-cap">Project preview</div>
                  </div>
                </div>
              </div>
              <div className="description px-4 space-y-4 leading-relaxed">
                <h3 className="text-2xl font-semibold">{p.t}</h3>
                <p className="text-sm text-(--muted)">{p.d}</p>
              </div>
              <div className="proj-tags px-4 space-x-2 text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="text-(--accent-2) bg-(--accent-deep-2) py-1.5 px-2 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-actions flex gap-4 p-4 text-sm text-(--muted)">
                <a className="btn ghost flex gap-2  hover:border-(--accent-2) hover:text-(--accent-2) transition-all duration-200 ease-in-out tracking-wide" href={p.live}>
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
                <a className="btn ghost flex gap-2 hover:border-(--accent-2) hover:text-(--accent-2) transition-all duration-200 ease-in-out tracking-wide" href={p.code}>
                  <p>{"< >"}</p>
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
