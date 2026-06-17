import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import { faqs } from "../../data/content";
import { cn } from "../../lib/utils";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-card-border dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <span className="font-medium text-sm text-primary dark:text-white pr-4">{q}</span>
        <ChevronDown size={18} className={cn("text-muted transition-transform duration-300 flex-shrink-0", open && "rotate-180")} />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        className={cn("overflow-hidden transition-all duration-300", open ? "max-h-60" : "max-h-0")}
      >
        <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <Container className="max-w-3xl">
        <div className="text-center mb-12 reveal">
          <p className="text-xs uppercase tracking-label text-accent font-semibold mb-3">Support</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-heading-lg text-primary dark:text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 reveal-children">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
