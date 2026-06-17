import Container from "../ui/Container";
import { features } from "../../data/content";

export default function Features() {
  return (
    <section id="features" className="py-24">
      <Container>
        <div className="text-center mb-16 reveal">
          <p className="text-xs uppercase tracking-label text-accent font-semibold mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-heading-lg text-primary dark:text-white">Powerful Features</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Everything you need for professional drive test analysis in one tool</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal-children">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-5 rounded-xl border border-card-border dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <f.icon size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold text-sm tracking-heading-sm text-primary dark:text-white mb-1">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
