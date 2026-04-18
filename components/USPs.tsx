import { Target, Users, Layers } from "lucide-react";

const usps = [
  {
    icon: Target,
    title: "Praxis statt Theorie",
    text: "Jedes Kursmodul und jede Empfehlung basiert auf realen Projekten aus der Beratung — kein Lehrbuchwissen.",
    accent: false,
  },
  {
    icon: Users,
    title: "Für Entscheider gemacht",
    text: "Kein Tech-Jargon. Wir übersetzen KI-Themen in eine Sprache, die im Führungskreis funktioniert.",
    accent: true,
  },
  {
    icon: Layers,
    title: "Hybrid: Lernen + Beratung",
    text: "Erst das Fundament durch die Academy, dann individuelle Beratung. Sie entscheiden mit Substanz.",
    accent: false,
  },
];

export default function USPs() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((u) =>
            u.accent ? (
              <div
                key={u.title}
                className="rounded-2xl p-8 bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 relative overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center mb-5 relative">
                  <u.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 relative">
                  {u.title}
                </h3>
                <p className="text-emerald-50 leading-relaxed relative">
                  {u.text}
                </p>
              </div>
            ) : (
              <div key={u.title} className="tile">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                  <u.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                  {u.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{u.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
