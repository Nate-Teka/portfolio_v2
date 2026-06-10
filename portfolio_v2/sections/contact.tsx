"use client";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    subject: "",
    messageBox: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !userInput.fullName ||
      !userInput.email ||
      !userInput.subject ||
      !userInput.messageBox
    ) {
      toast.error("Please fill out all fields");
      return;
    } else {
      console.log(userInput);
    }

    try {
      const emailParams = {
        fullName: userInput.fullName,
        email: userInput.email,
        subject: userInput.subject,
        messageBox: userInput.messageBox,
      };
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
    console.log("Service:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("Template:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  };
  return (
    <section className="alt block w-full bg-(--bg-2) py-20" id="contact">
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
        <div className="contact-grid reveal grid gap-12 lg:grid-cols-2">
          <div className="contact-info space-y-4 [&__span]:flex [&_a]:flex [&_a]:items-center [&_a]:gap-x-4 [&_a]:rounded-xl [&_a]:border [&_a]:border-(--line) [&_a]:bg-(--panel) [&_a]:p-4 [&_span]:flex-col [&_svg]:h-12 [&_svg]:w-12 [&_svg]:rounded-xl [&_svg]:bg-(--accent-deep-2) [&_svg]:p-3">
            <a
              className="ci-row transform-y flex transition-all duration-200 hover:scale-101 hover:border-(--accent-2) hover:bg-(--panel-2) hover:text-(--accent-2)"
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
              className="ci-row transform-y transition-all duration-200 hover:scale-101 hover:border-(--accent-2) hover:bg-(--panel-2) hover:text-(--accent-2)"
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
              className="ci-row transform-y transition-all duration-200 hover:scale-101 hover:border-(--accent-2) hover:bg-(--panel-2) hover:text-(--accent-2)"
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
            <a
              className="ci-row transform-y transition-all duration-200 hover:scale-101 hover:border-(--accent-2) hover:bg-(--panel-2) hover:text-(--accent-2)"
              href="#"
            >
              <span className="ci-ico">
                <MapPin />
              </span>
              <span>
                <small>Location</small>
                Available remote · worldwide
              </span>
            </a>
          </div>
          <form
            className="contact-form space-y-8 rounded-xl border border-(--line) bg-(--panel) p-8 [&_input]:bg-(--bg) [&_input]:transition-all [&_input]:duration-200 [&_input]:focus:ring-2 [&_input]:focus:ring-(--accent-2) [&_input]:focus:outline-hidden"
            id="contactForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row bg grid grid-cols-2 gap-4">
              <div className="field">
                <label htmlFor="cf-name">
                  <span className="accent tracking-wide text-(--accent-2)">
                    const{" "}
                  </span>
                  name =
                </label>
                <input
                  id="cf-name"
                  name="fullName"
                  onChange={handleChange}
                  className="w-full rounded-lg p-2"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="cf-email">
                  <span className="accent tracking-wide text-(--accent-2)">
                    const{" "}
                  </span>
                  email =
                </label>
                <input
                  id="cf-email"
                  name="email"
                  className="w-full rounded-lg p-2"
                  type="email"
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>
            <div className="field flex flex-col gap-2">
              <label htmlFor="cf-subject w-full">
                <span className="accent tracking-wide text-(--accent-2)">
                  const{" "}
                </span>
                subject =
              </label>
              <input
                id="cf-subject"
                className="w-full rounded-lg p-2"
                onChange={handleChange}
                name="subject"
                type="text"
                placeholder="What's this about?"
              />
            </div>
            <div className="field flex flex-col gap-2">
              <label htmlFor="cf-msg ">
                <span className="accent text-(--accent-2)">let </span>
                message =
                <br />
              </label>
              <textarea
                id="cf-msg"
                className="min-h-32.5 w-full rounded-xl bg-(--bg) p-2.5 transition-all duration-200 focus:ring-2 focus:ring-(--accent-2) focus:outline-hidden"
                name="messageBox"
                placeholder="Tell me about your project..."
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn solid cursor-pointer rounded-lg border border-(--accent-2) px-5 py-2 transition-all duration-200 hover:bg-(--accent-2) hover:text-(--bg) hover:shadow-[0_8px_30px_-8px_var(--accent-2)]"
            >
              Send message →
            </button>
            <div className="form-ok" id="formOk"></div>
          </form>
        </div>
      </div>
    </section>
  );
}
