import { Upload, Settings, BarChart3, Share2 } from "lucide-react";
import Container from "../ui/Container";
import { steps } from "../../data/content";

const icons = [Upload, Settings, BarChart3, Share2];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">How It Works</p>
          <h2 className="heading-lg">How It Works</h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            From raw CSV data to shareable dashboard in 4 simple steps.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.num} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-card-border dark:border-gray-700 p-6 space-y-4 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent dark:text-[#8BADB9]">{s.num}</span>
                  <Icon className="w-5 h-5 text-primary/20 dark:text-gray-600" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{s.title}</h3>
                  <p className="text-xs text-muted dark:text-gray-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal text-center text-xs text-muted dark:text-gray-400 mt-10">Average setup time: less than 2 minutes</p>
      </Container>
    </section>
  );
}
