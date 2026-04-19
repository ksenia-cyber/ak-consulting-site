const steps = [
  {
    n: "01",
    title: "Verstehen",
    text: "Sie erarbeiten sich über unsere Academy ein fundiertes Basiswissen zu KI, LLMs und Voice AI — in Ihrem Tempo.",
  },
  {
    n: "02",
    title: "Bewerten",
    text: "Gemeinsam identifizieren wir Potenziale in Ihrem Unternehmen und bewerten Use Cases nach Nutzen, Aufwand und Risiko.",
  },
  {
    n: "03",
    title: "Entscheiden",
    text: "Sie erhalten eine klare Empfehlung und konkrete Roadmap. Umsetzung durch Ihr Team oder externe Implementierungspartner.",
  },
];

export default function Approach() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3">Unser Ansatz</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
            In drei Schritten zur souveränen KI-Entscheidung
          </h2>
          <p className="mt-4 text-slate-600">
            Wir beraten, wie KI-Lösungen in Ihrem Unternehmen aussehen könnten
            &mdash; ohne in-house-Umsetzung, dafür mit klarer strategischer Tiefe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl p-8 border border-slate-100 relative"
            >
              <div className="font-heading text-5xl font-black text-amber-100 absolute top-4 right-6 select-none">
                {s.n}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 relative">
                {s.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
