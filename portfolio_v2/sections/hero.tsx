import { UserRound } from "lucide-react";
const SKILLS = [
  "React/ NextJs",
  "React Native",
  "TypeScript",
  "Kotlin",
  "C++",
  "Java",
  "MySQL",
];
const TAGSTYLE = "font-(mono|display) text-2xl";
const lineNumbers = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];
const baseBadge =
  "absolute w-19 h-19 border border-(--line-strong) flex flex-col gap-1 justify-center items-center bg-(--panel) rounded-full shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] font-(--font-mono) font-bold text-[0.9rem] animate-bob text-(--accent-2)";
const badgeSmall = "block text-[0.58rem] text-(--muted) font-extrabold";
export default function HeroSection() {
  return (
    <section className="hero w-full py-22.5" id="home">
      <div
        className="code-rail absolute top-50 bottom-10 left-2 hidden w-11.5 flex-col gap-1.5 opacity-50 lg:flex"
        id="codeRail"
      >
        {lineNumbers.map((n) => (
          <span key={n} className="line text-[0.7rem] text-(--muted-2)">
            {n}
          </span>
        ))}
      </div>
      <div className="wrap hero-grid flex grid-cols-2 flex-col-reverse lg:grid">
        <div className="hero-copy space-y-4 [&_.tag]:text-[0.95rem] [&_.tag]:tracking-[0.02rem] [&_.tag]:text-(--muted-2)">
          <div className="tag hero-eyebrow mb-0">&lt;/html&gt;</div>
          <div className="tag">&lt;body&gt;</div>
          <div className="tag">&lt;h1&gt;</div>
          <h1 className="hero-title text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98] font-bold">
            Hello, <br />
            I'm <span className="accent text-(--accent-2)">Nathaniel</span>
            ,<br />A Frontend Developer
          </h1>
          <div className="tag">&lt;/h1&gt;</div>
          <p className="hero-sub text-(--muted)">
            // React &amp; React Native developer building fast, polished web
            and mobile products.
          </p>
          <div className="tag">&lt;/body&gt;</div>
          <div className="hero-actions mt-9 mb-9 flex flex-col gap-4 text-[1.05rem]  lg:justify-between [&_.btn]:cursor-pointer [&_.btn]:rounded-xl [&_.btn]:border [&_.btn]:px-6.5 [&_.btn]:py-3.5 [&_.btn]:transition-all [&_.btn]:duration-200 [&_.btn]:ease-in-out whitespace-nowrap">
            <a
              className="btn border border-(--accent-2) hover:bg-(--accent-2) hover:text-(--bg) hover:shadow-[0_8px_30px_-8px_var(--accent-2)]"
              href="#"
              id="cvBtn"
            >
              View my CV
            </a>
            <a
              className="btn ghost border border-(--line) hover:-translate-y-0.5 hover:border-(--accent-2) hover:text-(--accent-2)"
              href="#projects"
            >
              See my work
            </a>
            <a
              className="btn link-underline border-none underline underline-offset-12 hover:text-(--accent-2)"
              href="#contact"
            >
              Book a call →
            </a>
          </div>
          <div className="hero-tags flex flex-wrap gap-x-4 gap-y-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-2xl border border-(--line) bg-(--panel-2) px-3.25 py-1.5 text-sm text-(--muted)"
              >
                <span className="text-(--accent-2)">▹</span>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-portrait flex items-center justify-center">
          <div className="portrait-ring relative flex aspect-[0.86] w-[min(420px,42vw)] flex-col items-center justify-center overflow-visible rounded-3xl rounded-bl-none border border-(--line)">
            {/*portrait-disc: absolute  rounded-[50%] flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,var(--panel-2),var(--bg-2)_70%)]  after:content[''] after:absolute after:inset-0 after:rounded-full after:bg-[conic-gradient(from_210deg,transparent_60%,var(--accent-soft)_80%,transparent_95%)] */}
            <div className="portrait-disc"></div>
            <div className="photo-ph portrait-img after:content[''] overflow-hidden border-[1px_solid_var(--line)] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.018)_0_12px,transparent_12px_24px)] after:rounded-3xl after:rounded-bl-none">
              <div className="ph-in color-[var(--muted-2)] relative z-1 flex flex-col items-center gap-3 text-center">
                <div className="ph-ic color-(--accent) grid h-21 w-21 place-items-center rounded-full bg-(--accent-soft)">
                  <UserRound className="h-10 w-10" strokeWidth={1.5} />
                </div>
                <div className="ph-cap">Portrait photo</div>
              </div>
            </div>
            <div
              className={`${baseBadge} float-badge b1 top-[8%] right-[-6%]`}
            >
              <p className="text-xl">TS</p><small className={`${badgeSmall}`}>type-safe</small>
            </div>
            <div
              className={`${baseBadge} float-badge b2 top-[30%] left-[-10%]`}
            >
              <p className="text-xl">Py</p><small className={`${badgeSmall}`}>python</small>
            </div>
            <div
              className={`${baseBadge} float-badge b3 right-[8%] bottom-[-4%]`}
            >
              <p className="text-3xl">⚛</p><small className={`${badgeSmall}`}>React</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
