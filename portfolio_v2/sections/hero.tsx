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
const baseBadge = "absolute w-19 h-19 border border-(--line-strong) grid place-items-center bg-(--panel) rounded-full shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] text-(--font-mono) font-bold text-[0.9rem] text-(--accent) animate-bob";
const badgeSmall = "block text-[0.58rem] text-(--muted) font-extrabold";
export default function HeroSection() {
  return (
    <section className="hero w-full py-22.5 " id="home">
      <div
        className="code-rail absolute left-2 top-30 bottom-10 w-11.5 flex flex-col gap-1.5  opacity-50"
        id="codeRail"
      >
        {lineNumbers.map((n) => (
          <span key={n} className="line text-(--muted-2) text-[0.7rem]">
            {n}
          </span>
        ))}
      </div>
      <div className="wrap hero-grid grid grid-cols-2">
        <div className="hero-copy [&_.tag]:text-[0.95rem] [&_.tag]:tracking-[0.02rem] [&_.tag]:text-(--muted-2) space-y-4">
          <div className="tag hero-eyebrow mb-0 ">&lt;/html&gt;</div>
          <div className="tag ">&lt;body&gt;</div>
          <div className="tag ">&lt;h1&gt;</div>
          <h1 className="hero-title font-bold text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98]">
            Hello, <br />
            I'm <span className="accent text-(--accent-2)">Nathaniel</span>
            ,<br />A Frontend Developer
          </h1>
          <div className="tag ">&lt;/h1&gt;</div>
          <p className="hero-sub text-(--muted)">
            // React &amp; React Native developer building fast, polished web
            and mobile products.
          </p>
          <div className="tag">&lt;/body&gt;</div>
          <div className="hero-actions flex justify-between gap-4 text-[1.05rem] mt-9 mb-9 [&_.btn]:cursor-pointer [&_.btn]:transition-all [&_.btn]:duration-200 [&_.btn]:ease-in-out [&_.btn]:border [&_.btn]:rounded-xl  [&_.btn]:px-6.5 [&_.btn]:py-3.5">
            <a
              className="btn hover:shadow-[0_8px_30px_-8px_var(--accent-2)] hover:bg-(--accent-2) hover:text-(--bg) border border-(--accent-2)"
              href="#"
              id="cvBtn"
            >
              View my CV
            </a>
            <a
              className="btn ghost border border-(--line) hover:border-(--accent-2) hover:text-(--accent-2) hover:-translate-y-0.5"
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
          <div className="hero-tags flex-wrap flex gap-x-4 gap-y-3 ">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="border border-(--line) bg-(--panel-2) rounded-2xl px-3.25 py-1.5 text-sm text-(--muted)"
              >
                <span className="text-(--accent-2)">▹</span>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-portrait flex justify-center items-center">
          <div
            className="portrait-ring relative flex flex-col items-center  justify-center w-[min(420px,42vw)] aspect-[0.86]
           overflow-visible border border-(--line) rounded-3xl rounded-bl-none"
          >
            <div className="portrait-disc absolute  rounded-[50%] flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,var(--panel-2),var(--bg-2)_70%)] after:content[''] after:absolute after:inset-0 after:rounded-full after:bg-[conic-gradient(from_210deg,transparent_60%,var(--accent-soft)_80%,transparent_95%)]"></div>
            <div className="photo-ph portrait-img overflow-hidden  border-[1px_solid_var(--line)] after:content[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.018)_0_12px,transparent_12px_24px)]">
              <div className="ph-in relative z-1 flex flex-col items-center gap-3 color-[var(--muted-2)] text-center">
                <div className="ph-ic w-21 h-21 rounded-full bg-(--accent-soft) grid place-items-center color-(--accent)">
                  <UserRound className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <div className="ph-cap ">Portrait photo</div>
              </div>
            </div>
            <div className={`${baseBadge} ${badgeSmall}  float-badge b1 top-[8%] right-[-6%] delay-800`}>
              TS<small>type-safe</small>
            </div>
            <div className={`${baseBadge} ${badgeSmall} float-badge b2 top-[26%] left-[-10%] delay-300`}>
              Py<small>python</small>
            </div>
            <div className={`${baseBadge} ${badgeSmall} float-badge b3 bottom-[-4%] right-[8%] delay-450`}>
              ⚛<small>React</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
