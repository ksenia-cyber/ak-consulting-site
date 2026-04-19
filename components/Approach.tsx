const steps = [
  {
    n: "01",
    title: "Kurs auswählen",
    text: "Suchen Sie sich den Kurs aus, der zu Ihrer Situation passt — KI-Grundlagen, Voice AI oder Prompt Engineering. Klare Kapitelstruktur, transparente Preise.",
  },
  {
    n: "02",
    title: "In Ihrem Tempo durcharbeiten",
    text: "Lernen wann und wo Sie wollen. Kurze Module, direkt abrufbar, keine festen Termine. Pausieren, wiederholen, zurückspringen — alles jederzeit möglich.",
  },
  {
    n: "03",
    title: "Wissen direkt anwenden",
    text: "Jede Lektion schließt mit konkretem Handlungsbezug. Sie nehmen nicht Theorie mit, sondern Entscheidungsgrundlagen für Ihr nächstes KI-Thema.",
  },
];

export default function Approach() {
  return (
    <section className="section bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3">Wie funktioniert die Academy</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-800">
            In drei Schritten zu fundiertem KI-Wissen
          </h2>
          <p className="mt-4 text-slate-600">
            Kein Schulungsraum, keine Präsenztermine, keine Zertifikats-Prüfung.
            Nur Inhalt, der in der Praxis trägt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl p-8 border border-slate-100 relative"
            >
              <div className="font-heading text-5xl font-black text-yellow-100 absolute top-4 right-6 select-none">
                {s.n}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-800 mb-3 relative">
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
