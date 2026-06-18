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
    <section id="use-cases" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Use Cases</p>
          <h2 className="heading-lg">Built for your team</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            Whether you're optimizing networks or presenting to clients — the Dashboard adapts to your workflow.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 border border-card-border dark:border-gray-700">
                  <uc.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{uc.title}</h3>
                  <p className="text-xs text-muted dark:text-gray-400 mt-1">{uc.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-14">
                {uc.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-muted dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent dark:bg-[#8BADB9] flex-shrink-0" />
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
