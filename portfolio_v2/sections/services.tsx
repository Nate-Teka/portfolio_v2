import { Monitor } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Code } from "lucide-react";
import { Gauge } from "lucide-react";
import { PenLine } from "lucide-react";
import { Webhook } from "lucide-react";

const SERVICES = [
  {
    ic: <Monitor />,
    t: "Web Development",
    d: "Fast, responsive websites and web apps built with React, Next.js and modern tooling.",
    n: "01",
  },
  {
    ic: <Smartphone />,
    t: "Mobile Apps",
    d: "Cross-platform mobile apps with React Native, plus native Android in Kotlin.",
    n: "02",
  },
  {
    ic: <Code />,
    t: "Frontend Engineering",
    d: "Clean, accessible, component-based UIs and design systems that scale.",
    n: "03",
  },
  {
    ic: <Webhook />,
    t: "APIs & Backend",
    d: "REST APIs, integrations and automation with Python and Node.",
    n: "04",
  },
  {
    ic: <Gauge />,
    t: "Performance & QA",
    d: "Speed audits, accessibility passes, and testing so things stay solid.",
    n: "05",
  },
  {
    ic: <PenLine />,
    t: "Design to Code",
    d: "Pixel-accurate handoff from Figma to production-ready components.",
    n: "06",
  },
];
const secKicker =
  "my-4 space-x-2 text-(--accent-2) before:mr-2 before:mb-1 before:inline-block before:h-px before:w-8.5 before:bg-(--accent-2) before:align-middle before:content-[''] tracking-wider";
export default function ServicesSection() {
  return (
    <section className="block w-full py-20" id="services">
      <div className="wrap space-y-8">
        <div className="sec-head reveal space-y-4">
          <div className={`${secKicker} sec-kicker mono tracking-wider`}>
            04 — services
          </div>
          <h2 className="sec-title text-[clamp(2rem,4vw,2.9rem)] font-bold">
            How I can help
          </h2>
          <p className="sec-sub text-(--muted)">
            From first wireframe to production deploy.
          </p>
        </div>
        <div className="serv-grid reveal grid lg:grid-cols-3 gap-4" id="servGrid">
          {SERVICES.map((s) => (
            <div
              key={s.t}
              className="serv-card space-y-1 rounded-2xl border border-(--line) bg-(--panel) p-6 transition-all hover:border-(--accent-2)"
            >
              <div className="serv-glyph flex justify-between [&_svg]:h-12 [&_svg]:w-12 [&_svg]:rounded-xl [&_svg]:bg-(--accent-deep-2) [&_svg]:stroke-(--accent-2) [&_svg]:stroke-[1.5] [&_svg]:p-3">
                {s.ic}
                <p className="text-[0.9rem] text-(--muted-2) ">{s.n}</p>
              </div>
              <h4 className="text-[1.12rem] font-semibold">{s.t}</h4>
              <p className="text-sm text-[0.92rem] text-(--muted)">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
