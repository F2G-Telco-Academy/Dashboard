import { Upload, Settings, BarChart3, Share2 } from "lucide-react";
import Container from "../ui/Container";
import { steps } from "../../data/content";

const icons = [Upload, Settings, BarChart3, Share2];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="text-center mb-16 reveal">
          <p className="text-xs uppercase tracking-label text-accent font-semibold mb-3">Workflow</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-heading-lg text-primary dark:text-white">How It Works</h2>
          <p className="text-muted mt-3">From raw CSV data to shareable dashboard in 4 simple steps</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-children">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.num} className="relative p-5 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-card-border dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold tracking-heading-xl text-accent/30">{s.num}</span>
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm tracking-heading-sm text-primary dark:text-white mb-1">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted mt-10 reveal">Average setup time: less than 2 minutes</p>
      </Container>
    </section>
  );
}
