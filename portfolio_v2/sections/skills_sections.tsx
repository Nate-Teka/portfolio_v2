const SKILLS = [
  {
    g: "⚛",
    n: "React / Next.js",
    d: "Component-driven UIs, SSR/SSG, app router, hooks.",
    l: 90,
  },
  {
    g: "📱",
    n: "React Native",
    d: "Cross-platform iOS & Android from one codebase.",
    l: 82,
  },
  {
    g: "TS",
    n: "TypeScript",
    d: "Type-safe, maintainable code at scale.",
    l: 85,
  },
  { g: "JS", n: "JavaScript", d: "Modern ES, async patterns, the DOM.", l: 92 },
  {
    g: "Kt",
    n: "Kotlin",
    d: "Native Android & clean, expressive logic.",
    l: 74,
  },
  { g: "Py", n: "Python", d: "APIs, automation, scripting & data.", l: 80 },
  {
    g: "</>",
    n: "HTML & CSS",
    d: "Semantic markup, responsive, accessible.",
    l: 95,
  },
  {
    g: "◈",
    n: "UI / UX",
    d: "Layout, motion & detail that feels right.",
    l: 78,
  },
];

const secKicker =
  "my-4 space-x-2 text-(--accent-2) before:mr-2 before:mb-1 before:inline-block before:h-px before:w-8.5 before:bg-(--accent-2) before:align-middle before:content-['']";

export default function SkillsSections() {
  return (
    <section className="block px-20 py-24" id="skills">
      <div className="wrap space-y-4">
        <div className="sec-head reveal space-y-3">
          <div className={`${secKicker} sec-kicker mono`}>
            02 — tech_stack[]
          </div>
          <h2 className="sec-title text-[clamp(2rem,4vw,2.9rem)] font-bold">
            Tools I build with
          </h2>
          <p className="sec-sub text-(--muted)">
            A focused toolkit across web, mobile, and the backend that supports
            them.
          </p>
        </div>
        <div
          className="skills-grid reveal grid grid-flow-col grid-rows-2 gap-4.5"
          id="skillsGrid"
        >
          {SKILLS.map((s) => (
            <div
              key={s.n}
              className="skill-card space-y-2 rounded-xl border border-(--line) bg-(--panel-2) px-5 py-5.5"
            >
              <span className="skill-glyph inline-block  bg-(--accent-deep-2) p-2 px-4 text-[18px] text-(--accent-2) rounded-md">
                {s.g}
              </span>
              <h4 className="text-[1.12rem] font-semibold">{s.n}</h4>
              <p className="text-sm text-[0.92rem] text-(--muted)">{s.d}</p>
              <div className="lvl mt-3.5 h-1.25 overflow-hidden rounded-[3px] bg-[rgba(255,255,255,0.07)]">
                <i
                  className="block h-full rounded-[3px] bg-linear-to-r from-(--accent-deep-2) to-(--accent-2)"
                  style={{ width: `${s.l}%` }}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
