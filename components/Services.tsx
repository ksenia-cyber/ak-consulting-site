import Link from "next/link";
import {
  Compass,
  Mic,
  Lightbulb,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "KI-Strategie-Workshop",
    text: "Wir zeigen Ihnen, wo KI in Ihrer Branche heute Mehrwert liefert und wo nicht — inklusive priorisierter Use-Case-Landkarte.",
  },
  {
    icon: Mic,
    title: "Voice-AI-Beratung",
    text: "Wir beraten Sie, welche Voice-AI-Architektur zu Ihrem Geschäftsmodell passt und welche Anbieter sinnvoll sind.",
  },
  {
    icon: Lightbulb,
    title: "Use-Case-Identifikation",
    text: "Strukturierte Analyse Ihrer Prozesse: Wo liegt das größte KI-Potenzial? Gemeinsam bewerten wir Nutzen und Machbarkeit.",
  },
  {
    icon: ClipboardCheck,
    title: "Vendor-Evaluation",
    text: "Objektiver Anbietervergleich: Wir zeigen Ihnen Stärken, Schwächen und versteckte Kosten der relevanten KI-Plattformen.",
  },
  {
    icon: GraduationCap,
    title: "Management-Enablement",
    text: "Maßgeschneiderte Workshops und Inhouse-Trainings, damit Ihr Führungsteam KI-Entscheidungen mit Substanz trifft.",
  },
  {
    icon: ShieldCheck,
    title: "EU-AI-Act & Compliance",
    text: "Wir zeigen Ihnen, wie der EU AI Act Ihre Projekte betrifft und welche Dokumentation für Ihre Use Cases nötig ist.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section bg-slate-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900" />
      <div className="container-xl relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3 !text-amber-400">Leistungen</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            Was wir für Sie tun können
          </h2>
          <p className="mt-4 text-slate-300">
            Sechs Beratungsbausteine — einzeln buchbar oder als integriertes
            Programm. Die Umsetzung erfolgt durch Sie selbst oder durch externe
            Implementierungspartner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all backdrop-blur"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {s.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-5">{s.text}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-amber-300 font-semibold text-sm group-hover:gap-2.5 transition-all"
              >
                Beratung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
