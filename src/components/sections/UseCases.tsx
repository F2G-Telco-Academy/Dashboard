import { Users, MapPin, Settings, Presentation } from "lucide-react";
import Container from "../ui/Container";

const useCases = [
  {
    icon: Users,
    title: "RF & Network Engineers",
    desc: "Validate coverage, analyze interference, and troubleshoot KPI degradation.",
    bullets: ["Multi-RAT comparison", "Polynomial regression trendlines", "KPI threshold analysis"],
  },
  {
    icon: MapPin,
    title: "Field Teams",
    desc: "Upload drive test data on-site and get instant visualization.",
    bullets: ["CSV drag-and-drop", "Interactive map overlay", "Real-time chart rendering"],
  },
  {
    icon: Settings,
    title: "Optimization Teams",
    desc: "Compare before/after with advanced analytics.",
    bullets: ["Side-by-side KPI comparison", "Customizable chart configs", "Export PNG/SVG reports"],
  },
  {
    icon: Presentation,
    title: "Client Presentations",
    desc: "Share professional dashboards via URL — no software install needed.",
    bullets: ["URL-based sharing", "Client view mode", "Rich text annotations"],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24">
      <Container>
        <div className="text-center mb-16 reveal">
          <p className="text-xs uppercase tracking-label text-accent font-semibold mb-3">Who It's For</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-heading-lg text-primary dark:text-white">Built For Your Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-children">
          {useCases.map((uc) => (
            <div key={uc.title} className="p-5 rounded-xl border border-card-border dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <uc.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold tracking-heading-sm text-primary dark:text-white mb-2">{uc.title}</h3>
              <p className="text-sm text-muted mb-3">{uc.desc}</p>
              <ul className="space-y-1.5">
                {uc.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
