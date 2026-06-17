import { Mail } from "lucide-react";
import Container from "../ui/Container";
import { GithubIcon } from "../ui/GithubIcon";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: "Dashboard", href: "https://pkfokam48.github.io/Drivetest-Telecom-Dashboard/" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Resources: [
    { label: "GitHub Repo", href: "https://github.com/pkfokam48/Drivetest-Telecom-Dashboard" },
    { label: "Documentation", href: "#faq" },
    { label: "Use Cases", href: "#use-cases" },
  ],
  Company: [
    { label: "F2G-SOLUTIONS", href: "https://f2gsolutions.com" },
    { label: "TELCO ACADEMY", href: "#" },
    { label: "Contact", href: "mailto:contact@f2g-solutions.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-xs font-bold text-white">F2</span>
              <span className="font-bold text-white tracking-heading-sm">DriveTest</span>
            </div>
            <p className="text-sm text-gray-400">Professional network validation by F2G-SOLUTIONS / PKFOKAM48</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-label text-gray-400 font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} F2G-SOLUTIONS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/pkfokam48" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:contact@f2g-solutions.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
