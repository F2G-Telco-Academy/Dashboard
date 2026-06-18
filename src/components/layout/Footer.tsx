import { Mail, Globe } from "lucide-react";
import Container from "../ui/Container";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub Repo", href: "https://github.com/pkfokam48/Drivetest-Telecom-Dashboard" },
    { label: "Release Notes", href: "#" },
  ],
  Company: [
    { label: "About F2G", href: "http://www.f2gsolutions.com/" },
    { label: "Contact Us", href: "mailto:contact@f2g-solutions.com" },
    { label: "Support", href: "mailto:contact@f2g-solutions.com" },
  ],
};

const socialLinks = [
  { name: "Website", icon: Globe, href: "http://www.f2gsolutions.com/" },
  { name: "Email", icon: Mail, href: "mailto:contact@f2g-solutions.com" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/f2g_logo.png" alt="F2G" width={28} height={28} className="rounded-md" />
              <span className="font-medium text-sm">DriveTest</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Professional network validation by F2G-SOLUTIONS.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium text-white/60 mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-muted hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">© {new Date().getFullYear()} F2G-SOLUTIONS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-muted hover:text-white transition-colors" aria-label={social.name}>
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
