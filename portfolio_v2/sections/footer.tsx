const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export default function FooterSection() {
  return (
    <footer className="site w-full bg-(--bg-nav) py-10">
      <div className="wrap foot-grid lg:flex items-center justify-between space-y-4">
        <div className="text-center">
          <div className="logo mb-4">
            <span className="br text-(--accent-2)">&lt;N/&gt; </span>
            Nathaniel Tekalgn
          </div>
          <div className="foot-copy text-sm text-(--muted-2)">
            © <span id="year">{new Date().getFullYear() + " "}</span>
            Nathaniel Tekalgn — built with care &amp; clean code.
          </div>
        </div>
        <nav className="foot-links flex lg:gap-2 space-x-4 tracking-wide justify-center lg:justify-start">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-(--muted) transition-all duration-200 ease-in-out hover:border-(--accent-2) hover:text-(--accent-2)"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          className="to-top text-(--muted) transition-all duration-200 ease-in-out hover:border-(--accent-2) hover:text-(--accent-2) lg:inline block text-center mb-4"
          href="#home"
        >
          ↑ back to top
        </a>
      </div>
    </footer>
  );
}
