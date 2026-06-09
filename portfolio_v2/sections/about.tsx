const statRow =
  "flex items-baseline pb-4 gap-4  border-dashed border-b border-(--line)";
const statLabelB = "text-(--text) block font-semibold font-mono text-[0.92rem]";
const secKicker =
  "my-4 space-x-2 text-(--accent-2) before:mr-2 before:mb-1 before:inline-block before:h-px before:w-8.5 before:bg-(--accent-2) before:align-middle before:content-['']";
export default function AboutSection() {
  return (
    <section className="alt block w-full py-20 bg-(--bg-2)" id="about">
      <div className="wrap about-grid reveal grid grid-cols-[1.2fr_0.9fr]">
        <div className="space-y-4">
          <div className={`${secKicker} sec-kicker mono`}>01 — about_me()</div>
          <h2 className="sec-title font-display text-[clamp(2rem,4vw,2.9rem)] leading-[1.05] font-extrabold">
            Turning ideas into clean, shippable code.
          </h2>
          <p className="mt-6 text-(--muted) [&_strong]:text-(--text)">
            I'm
            <strong> Nathaniel Tekalgn</strong>, a junior developer focused on
            the React ecosystem. I build responsive web apps with
            <strong>React &amp; Next.js</strong>, cross-platform mobile apps
            with
            <strong> React Native &amp; Kotlin</strong>, and back things up with
            <strong>Python</strong>
            tooling and APIs.
          </p>
          <p className="text-(--muted)">
            I care about the details that users feel but rarely name — fast load
            times, smooth interactions, accessible markup, and interfaces that
            just make sense. Every project is a chance to write a little cleaner
            and ship a little better.
          </p>
          <p className="mt-6 text-(--muted) [&_strong]:text-(--text)">
            Currently open to
            <strong> internships, freelance work, and junior roles </strong>
            where I can learn fast and contribute from day one.
          </p>
          <div className="hero-actions mt-9">
            <a
              className="btn ghost inline-block px-6.5 rounded-xl border border-(--line) py-3.5 hover:-translate-y-0.5 hover:border-(--accent-2) hover:text-(--accent-2) transition-all duration-200 ease-in-out "
              href="#contact"
            >
              Let's work together
            </a>
          </div>
        </div>
        <div className="stat-card h-fit gap-4.5 justify-self-end rounded-[14px] border border-(--line) bg-(--panel) p-6.5">
          <div className={`${statRow} stat-row`}>
            <div className="stat-num font-display min-w-21 text-[2.2rem] font-bold text-(--accent-2)">
              12+
            </div>
            <div className="stat-label text-(--muted)">
              <b className={`${statLabelB}`}>Projects </b>
              shipped &amp; in progress
            </div>
          </div>
          <div className={`${statRow} stat-row`}>
            <div className="stat-num font-display min-w-21 text-[2.2rem] font-bold text-(--accent-2)">
              7
            </div>
            <div className="stat-label text-(--muted)">
              <b className={`${statLabelB}`}>Languages </b>
              JS · TS · Kotlin · Python &amp; more
            </div>
          </div>
          <div className={`${statRow} stat-row border-none`}>
            <div className="stat-num font-display min-w-21 text-[2.2rem] font-bold text-(--accent-2)">
              ∞
            </div>
            <div className="stat-label text-(--muted)">
              <b className={`${statLabelB}`}>Curiosity </b>
              always learning the next thing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
