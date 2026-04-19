import { Lightbulb, Users, Compass } from "lucide-react";

const usps = [
  {
    icon: Lightbulb,
    title: "Praxis aus echten Projekten",
    text: "Jeder Kurs entsteht aus konkreten Beratungsmandaten im Mittelstand — kein Lehrbuchwissen, keine Theorie.",
  },
  {
    icon: Users,
    title: "Für Unternehmer und Geschäftsführer",
    text: "Kein Tech-Jargon. KI-Themen übersetzt in die Sprache, in der im Führungskreis entschieden wird.",
  },
  {
    icon: Compass,
    title: "Lernen und Beratung aus einer Hand",
    text: "Erst das Fundament durch unsere Academy, bei Bedarf ergänzt durch individuelle Beratung.",
  },
];

export default function USPs() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((u) => (
            <div key={u.title} className="tile">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 text-slate-800 flex items-center justify-center mb-5">
                <u.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">
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
