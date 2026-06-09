import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="block alt w-full py-20 bg-(--bg-2)" id="contact">
      <div className="wrap space-y-4">
        <div className="sec-head reveal space-y-4">
          <div className="sec-kicker mono text-(--accent-2)">
            05 — get_in_touch()
          </div>
          <h2 className="sec-title text-4xl font-bold">
            Let's build something
          </h2>
          <p className="sec-sub text-(--muted)">
            Got a project, a role, or just a question? Drop me a line — I reply
            fast.
          </p>
        </div>
        <div className="contact-grid reveal grid grid-cols-2 gap-12">
          <div className="contact-info space-y-4 [&_a]:bg-(--panel) [&_a]:border [&_a]:border-(--line) [&_a]:rounded-xl [&_a]:p-4 [&_svg]:bg-(--accent-deep-2) [&_svg]:w-12 [&_svg]:p-3 [&_svg]:h-12 [&_svg]:rounded-xl [&_a]:flex [&_a]:items-center [&_a]:gap-x-4 [&__span]:flex [&_span]:flex-col ">
            <a
              className="ci-row flex "
              href="mailto:nathaniel.tekalgn@email.com"
            >
              <span className="ci-ico">
                <Mail />
              </span>
              <span className="flex flex-col">
                <small>Email</small>
                nathaniel.tekalgn@email.com
              </span>
            </a>
            <a
              className="ci-row"
              href="https://github.com"
              target="_blank"
              rel="noopener"
            >
              <span className="ci-ico">
                <FaGithub size={48} />
              </span>
              <span>
                <small>GitHub</small>
                github.com/nathaniel-t
              </span>
            </a>
            <a
              className="ci-row"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener"
            >
              <span className="ci-ico">
                <FaLinkedinIn size={24} />
              </span>
              <span>
                <small>LinkedIn</small>
                linkedin.com/in/nathaniel-t
              </span>
            </a>
            <a className="ci-row" href="#">
              <span className="ci-ico">
                <MapPin />
              </span>
              <span>
                <small>Location</small>
                Available remote · worldwide
              </span>
            </a>
          </div>
          <form className="contact-form [&_input]:bg-(--bg) border border-(--line) rounded-xl p-8 space-y-8 bg-(--panel)" id="contactForm" noValidate>
            <div className="form-row grid grid-cols-2 gap-4 bg">
                <div className="field">
                  <label htmlFor="cf-name">
                    <span className="accent text-(--accent-2) tracking-wide ">const </span>
                    name =
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full p-2 rounded-lg"
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-email">
                    <span className="accent text-(--accent-2) tracking-wide">const </span>
                    email =
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="w-full p-2 rounded-lg"
                  />
                </div>
              
            </div>
            <div className="field flex flex-col gap-2">
              <label htmlFor="cf-subject w-full">
                <span className="accent text-(--accent-2) tracking-wide">const </span>
                subject =
              </label>
              <input
                id="cf-subject"
                className="w-full p-2 rounded-lg"
                name="subject"
                type="text"
                placeholder="What's this about?"
                
              />
            </div>
            <div className="field flex flex-col gap-2">
              <label htmlFor="cf-msg ">
                <span className="accent">let </span>
                message =
                <br />
              </label>
              <textarea
                id="cf-msg"
                className="w-full min-h-32.5 bg-(--bg) rounded-xl p-2.5"
                name="message"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button className="btn solid hover:shadow-[0_8px_30px_-8px_var(--accent-2)] hover:bg-(--accent-2) rounded-lg cursor-pointer px-5 transition-all py-2 duration-200 hover:text-(--bg) border border-(--accent-2)" type="submit">
              Send message →
            </button>
            <div className="form-ok" id="formOk"></div>
          </form>
        </div>
      </div>
    </section>
  );
}
