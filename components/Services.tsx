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
    accent: true,
  },
  {
    icon: Mic,
    title: "Voice-AI-Beratung",
    text: "Wir beraten Sie, welche Voice-AI-Architektur zu Ihrem Geschäftsmodell passt und welche Anbieter sinnvoll sind.",
    accent: false,
  },
  {
    icon: Lightbulb,
    title: "Use-Case-Identifikation",
    text: "Strukturierte Analyse Ihrer Prozesse: Wo liegt das größte KI-Potenzial? Gemeinsam bewerten wir Nutzen und Machbarkeit.",
    accent: false,
  },
  {
    icon: ClipboardCheck,
    title: "Vendor-Evaluation",
    text: "Objektiver Anbietervergleich: Wir zeigen Ihnen Stärken, Schwächen und versteckte Kosten der relevanten KI-Plattformen.",
    accent: false,
  },
  {
    icon: GraduationCap,
    title: "Management-Enablement",
    text: "Maßgeschneiderte Workshops und Inhouse-Trainings, damit Ihr Führungsteam KI-Entscheidungen mit Substanz trifft.",
    accent: true,
  },
  {
    icon: ShieldCheck,
    title: "EU-AI-Act & Compliance",
    text: "Wir zeigen Ihnen, wie der EU AI Act Ihre Projekte betrifft und welche Dokumentation für Ihre Use Cases nötig ist.",
    accent: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white border-t border-slate-100">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3">Leistungen</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
            Was wir für Sie tun können
          </h2>
          <p className="mt-4 text-slate-600">
            Sechs Beratungsbausteine — einzeln buchbar oder als integriertes
            Programm. Die Umsetzung erfolgt durch Sie selbst oder durch externe
            Implementierungspartner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) =>
            s.accent ? (
              <div
                key={s.title}
                className="rounded-2xl p-8 bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center mb-5 relative">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 relative">
                  {s.title}
                </h3>
                <p className="text-emerald-50 leading-relaxed mb-5 relative">
                  {s.text}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all relative"
                >
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div key={s.title} className="tile group">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">{s.text}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-sm group-hover:gap-2.5 transition-all"
                >
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
