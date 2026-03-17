import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "GitHub", href: "#github" },
  { label: "Projects", href: "#projects" },
];

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        el: document.getElementById(item.href.slice(1)),
      }));

      let current = "home";
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`group flex items-center gap-3 transition-all duration-300`}
        >
          {/* Label */}
          <span
            className={`text-xs font-medium tracking-wide transition-all duration-300 ${
              active === item.href.slice(1)
                ? "text-white opacity-100 translate-x-0"
                : "text-white/0 opacity-0 translate-x-2 group-hover:text-white/70 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {item.label}
          </span>

          {/* Dot / line indicator */}
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === item.href.slice(1)
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/30 group-hover:bg-white/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
