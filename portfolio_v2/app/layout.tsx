import "./globals.css";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const metadata = { title: "Portfolio v2" };

const links = [
  { name: "<Home>", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Services", href: "#services" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-50 flex h-19 justify-around border-b border-(--line) bg-(--bg-nav)/80 backdrop-blur-lg">
          <div className="flex w-full items-center justify-around gap-6">
            <a href="#home" className="logo gap-2.5 text-[1.15rem] font-bold">
              <span className="text-(--accent-2)">&lt;N/&gt; </span>
              Nathaniel Tekalgn
            </a>
            <nav
              className="lg:flex hidden items-center gap-6 text-[0.92rem] text-(--muted)"
              id="navLinks"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-zinc-400 transition-all duration-200 hover:rounded-full hover:bg-(--panel-2) hover:p-2 hover:text-(--accent-2) "
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-x-2 [&_a]:transition-all [&_a]:duration-350 [&_a]:w-full [&_a]:rounded-full [&_a]:border [&_a]:border-(--line) [&_a]:hover:border-(--accent-2) [&_a]:bg-(--panel) [&_a]:p-2 [&_a]:text-(--muted)">
              <a href="github.com " className="w-6 hover:text-(--accent-2)">
                <FaLinkedinIn size={20}  />
              </a>
              <a href="github.com" className="w-6 hover:text-(--accent-2)">
                <FaGithub size={20} />
              </a>
              <a className="icon-btn w-6 hover:text-(--accent-2)" href="#contact" aria-label="Email">
                <Mail size={20}  />
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
