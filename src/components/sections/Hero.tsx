import { useState, useEffect, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const showcaseImages = [
  { alt: "Full Dashboard View", src: "/screenshots/dashboard-full.png" },
  { alt: "Interactive Map", src: "/screenshots/dashboard-map.png" },
  { alt: "KPI Analysis Panel", src: "/screenshots/dashboard-panel.png" },
  { alt: "KPI Charts View", src: "/screenshots/dashboard-kpi.png" },
  { alt: "Dashboard Overview", src: "/screenshots/dashboard-overview.png" },
];

const stats = [
  { value: "13+", label: "KPI Charts" },
  { value: "4", label: "RAT Technologies" },
  { value: "0", label: "Servers Needed" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % showcaseImages.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="text-xs uppercase tracking-label text-accent font-semibold mb-4">Multi-RAT Network Validation</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-heading-xl text-primary dark:text-white leading-[1.1] mb-6">
            Professional Drive Test Dashboard
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Upload CSV, visualize 13+ KPIs, overlay on interactive maps, and share with clients — all in your browser. Supports LTE, 5G NR, WCDMA, GSM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" href="http://www.f2gsolutions.com/">
              <ExternalLink size={18} /> Try It Now
            </Button>
          </div>
        </div>

        {/* Auto-rotating showcase */}
        <div
          className="reveal relative mx-auto max-w-4xl"
          style={{ perspective: "2000px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-2xl border border-card-border dark:border-gray-700 overflow-hidden shadow-xl" style={{ transform: "rotateX(4deg)" }}>
            <div className="bg-white dark:bg-gray-900 p-2">
              <div className="flex gap-1.5 mb-2 px-2 pt-1">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl">
                <div
                  className="flex h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {showcaseImages.map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-full h-full bg-gray-900 flex items-center justify-center">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {showcaseImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-gray-300 dark:bg-gray-600"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-3 gap-8 max-w-md mx-auto mt-12 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold tracking-heading-lg text-primary dark:text-white">{s.value}</p>
              <p className="text-xs text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
