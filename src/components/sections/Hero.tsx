import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedImages = [...showcaseImages, ...showcaseImages];

  const next = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((c) => c + 1);
  }, []);

  const prev = () => {
    setIsTransitioning(true);
    setCurrent((c) => c - 1);
  };

  const handleTransitionEnd = () => {
    if (current >= showcaseImages.length) {
      setIsTransitioning(false);
      setCurrent(0);
    } else if (current < 0) {
      setIsTransitioning(false);
      setCurrent(showcaseImages.length - 1);
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="pt-28 pb-12 md:pb-16">
      <Container>
        <div className="reveal max-w-[900px] mx-auto text-center space-y-6">
          <p className="section-label">Multi-RAT Network Validation</p>
          <h1 className="heading-xl">
            Professional Drive Test Dashboard
          </h1>
          <p className="text-body dark:text-gray-300 max-w-2xl mx-auto">
            Upload CSV, visualize 13+ KPIs, overlay on interactive maps, and share with clients — all in your browser. Supports LTE, 5G NR, WCDMA, GSM.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>

        <div
          className="reveal mt-16 group"
          style={{ perspective: "2000px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="rounded-2xl overflow-hidden border border-card-border dark:border-gray-700 shadow-2xl relative bg-white dark:bg-gray-900"
            style={{ transform: "rotateX(4deg)", transformOrigin: "center bottom" }}
          >
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <div
                className="absolute inset-0 flex"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((img, i) => (
                  <div key={i} className="w-full h-full flex-shrink-0 relative">
                    <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-primary dark:text-gray-100" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-card-border dark:border-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-primary dark:text-gray-100" />
            </button>
          </div>
        </div>

        <div className="reveal flex justify-center gap-12 mt-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-medium tracking-heading-lg text-primary dark:text-gray-100">{s.value}</div>
              <div className="text-xs text-muted dark:text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
