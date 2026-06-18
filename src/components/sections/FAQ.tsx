import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import { faqs } from "../../data/content";
import { cn } from "../../lib/utils";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-card-border dark:border-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 px-1 text-left flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-primary dark:text-gray-100 tracking-heading-sm">{q}</span>
        <ChevronDown className={cn("w-4 h-4 text-muted dark:text-gray-400 flex-shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-60 pb-5" : "max-h-0")}>
        <p className="text-xs text-muted dark:text-gray-400 leading-relaxed px-1">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-8 md:mb-10 space-y-4">
            <p className="section-label">FAQ</p>
            <h2 className="heading-lg">Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
