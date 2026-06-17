import {
  Radio, BarChart3, Map, Share2, Edit3, Save, Type, Download,
  TrendingUp, Columns, Moon, Wifi,
} from "lucide-react";

export const features = [
  { icon: Radio, title: "Multi-RAT Support", desc: "2G GSM, 3G UMTS, 4G LTE, 5G NR — all in one dashboard" },
  { icon: BarChart3, title: "13+ KPI Charts", desc: "Comprehensive visualization for every network metric" },
  { icon: Map, title: "Interactive Map", desc: "Leaflet-based geolocation with drive route overlay" },
  { icon: Share2, title: "Client Sharing", desc: "Share dashboards via URL — no login required" },
  { icon: Edit3, title: "Edit Mode", desc: "Modify dashboard layout and content live" },
  { icon: Save, title: "Save/Load Configs", desc: "Persist configurations as JSON for reuse" },
  { icon: Type, title: "Rich Text", desc: "Formatted annotations and notes on charts" },
  { icon: Download, title: "Chart Export", desc: "Export any chart as PNG or SVG" },
  { icon: TrendingUp, title: "Polynomial Regression", desc: "Automatic trendline analysis on KPI data" },
  { icon: Columns, title: "Multi-KPI Comparison", desc: "Side-by-side analysis across metrics" },
  { icon: Moon, title: "Dark Mode", desc: "Eye-friendly visualization for long sessions" },
  { icon: Wifi, title: "No Server Required", desc: "Runs entirely client-side in your browser" },
];

export const steps = [
  { num: "01", title: "Upload CSV", desc: "Drop your drive test CSV file — any standard format supported" },
  { num: "02", title: "Customize", desc: "Select RAT, choose KPIs, configure chart styles" },
  { num: "03", title: "Analyze KPIs", desc: "Visualize trends, regressions, and map overlays" },
  { num: "04", title: "Share with Client", desc: "Generate a shareable URL for client review" },
];

export const useCases = [
  { title: "Network Engineers", desc: "Validate RF parameters and identify coverage gaps with multi-RAT analysis", color: "from-primary/20 to-transparent" },
  { title: "Field Teams", desc: "Upload drive test data on-site and get instant KPI visualization", color: "from-emerald-500/20 to-transparent" },
  { title: "Optimization Teams", desc: "Compare before/after optimization with polynomial regression trendlines", color: "from-amber-500/20 to-transparent" },
  { title: "Client Presentations", desc: "Share professional dashboards via URL — no software install needed", color: "from-violet-500/20 to-transparent" },
];

export const faqs = [
  { q: "What CSV formats are supported?", a: "The dashboard supports standard drive test CSV exports from TEMS, Nemo, Actix, and generic formats. Columns are auto-detected based on common KPI naming conventions." },
  { q: "Is my data secure?", a: "Absolutely. All processing happens client-side in your browser. No data is uploaded to any server. Your files never leave your machine." },
  { q: "What browsers are compatible?", a: "Chrome, Firefox, Edge, and Safari (latest versions). The dashboard uses modern JavaScript APIs and works best on Chromium-based browsers." },
  { q: "Is it free to use?", a: "Yes. The Telecom Drive Test Dashboard is open-source and free for professional use. No license fees, no subscriptions." },
];
