import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Endlich jemand, der KI-Themen ohne Buzzwords erklärt. Wir haben nach dem Workshop eine klare Roadmap — und wissen, wo wir bewusst nicht investieren.",
    name: "M. Klein",
    role: "CEO · Maschinenbau, 180 MA",
    initials: "MK",
  },
  {
    quote:
      "Die Voice-AI-Beratung hat uns vor einer teuren Fehlentscheidung bewahrt. Der Anbietervergleich war Gold wert, präzise und herstellerneutral.",
    name: "S. Bauer",
    role: "Geschäftsführerin · Dienstleistung, 60 MA",
    initials: "SB",
  },
  {
    quote:
      "Das hybride Modell funktioniert: Unser Führungsteam hat zuerst die Academy durchlaufen, dann konnten wir in der Beratung direkt strategisch diskutieren.",
    name: "T. Weber",
    role: "CFO · Handel, 340 MA",
    initials: "TW",
  },
];

export default function Testimonials() {
  return (
    <section id="voices" className="section bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3">Stimmen</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
            Was Kunden sagen
          </h2>
          <p className="mt-4 text-sm text-slate-500 italic">
            Platzhalter — werden durch echte Kundenstimmen ersetzt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-7 relative border border-slate-100"
            >
              <Quote className="w-10 h-10 text-amber-200 mb-3" />
              <div className="flex gap-0.5 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className="gradient-avatar text-sm">{t.initials}</div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
