import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !dark ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <Container>
        <nav
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 dark:bg-dark/80 backdrop-blur-lg border border-card-border dark:border-gray-700 shadow-sm"
              : "bg-white/50 dark:bg-dark/50 backdrop-blur-sm"
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-bold text-primary dark:text-white">
            <img src="/f2g_logo.png" alt="F2G Logo" className="h-8" />
            <span className="tracking-heading-sm">F2G</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm tracking-nav text-muted hover:text-primary dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleDark} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button size="sm" href="http://www.f2gsolutions.com/">Try It Now</Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-2" : "max-h-0"}`}>
          <div className="bg-white dark:bg-dark/95 backdrop-blur-lg rounded-2xl border border-card-border dark:border-gray-700 p-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted hover:text-primary dark:hover:text-white">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-card-border dark:border-gray-700">
              <button onClick={toggleDark} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle dark mode">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Button size="sm" href="http://www.f2gsolutions.com/" className="flex-1">Try It Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
