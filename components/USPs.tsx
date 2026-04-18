import { Target, Users, Layers } from "lucide-react";

const usps = [
  {
    icon: Target,
    title: "Praxis statt Theorie",
    text: "Jedes Kursmodul und jede Empfehlung basiert auf realen Projekten aus der Beratung — kein Lehrbuchwissen.",
  },
  {
    icon: Users,
    title: "Für Entscheider gemacht",
    text: "Kein Tech-Jargon. Wir übersetzen KI-Themen in eine Sprache, die im Führungskreis funktioniert.",
  },
  {
    icon: Layers,
    title: "Hybrid: Lernen + Beratung",
    text: "Erst das Fundament durch die Academy, dann individuelle Beratung. Sie entscheiden mit Substanz.",
  },
];

export default function USPs() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((u) => (
            <div key={u.title} className="tile">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <u.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {u.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
