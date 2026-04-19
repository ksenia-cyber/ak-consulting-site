import Link from "next/link";
import { ClipboardCheck, Mic, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "KI-Potenzialanalyse & Roadmap",
    text: "Wir analysieren Ihre Prozesse strukturiert, identifizieren Use Cases mit dem größten Hebel und erstellen eine priorisierte Roadmap. Umsetzung durch Sie oder externe Partner.",
  },
  {
    icon: Mic,
    title: "Voice-AI-Beratung",
    text: "Herstellerneutraler Anbietervergleich und Architektur-Beratung für Voice-AI-Projekte. Wir zeigen Stärken, Schwächen und echte Kosten der Plattformen — ohne eigenes Tool zu verkaufen.",
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3 !text-yellow-400">Beratung</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            Wenn ein Kurs nicht reicht — unsere Beratung
          </h2>
          <p className="mt-4 text-slate-300">
            Zwei klar umrissene Bausteine für Situationen, in denen
            Selbstlernen an Grenzen stößt und Sie externe Perspektive brauchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all backdrop-blur"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                {s.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">{s.text}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-yellow-300 font-semibold text-sm group-hover:gap-2.5 transition-all"
              >
                Erstgespräch buchen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
