import Container from "../ui/Container";
import { features } from "../../data/content";

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16">
      <Container>
        <div className="reveal text-center mb-10 md:mb-12 space-y-4">
          <p className="section-label">Features & Benefits</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Powerful Features
          </h2>
          <p className="text-body dark:text-gray-300 max-w-xl mx-auto">
            Everything you need for professional drive test analysis in one tool.
          </p>
        </div>

        <div className="reveal-children grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-5 flex flex-col justify-end gap-3 h-[220px] border border-card-border/50 dark:border-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
            >
              <f.icon className="w-5 h-5 text-accent dark:text-[#8BADB9]" />
              <div>
                <h3 className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{f.title}</h3>
                <p className="text-xs text-muted dark:text-gray-400 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
