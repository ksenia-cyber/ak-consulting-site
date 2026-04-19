"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Für wen sind die Kurse gedacht?",
    a: "Für Unternehmer, Geschäftsführer und Entscheider im deutschsprachigen Mittelstand, die KI strategisch einsetzen wollen — ohne selbst Entwickler zu werden. Kein Vorwissen nötig, außer dem Willen, sich eine Stunde am Stück konzentriert mit einem Thema zu befassen.",
  },
  {
    q: "Wie lange habe ich Zugriff auf einen Kurs?",
    a: "Lebenslang. Sobald Sie einen Kurs gebucht haben, bleibt er Ihnen dauerhaft zugänglich — inklusive aller zukünftigen Updates zum jeweiligen Thema.",
  },
  {
    q: "Gibt es ein Zertifikat?",
    a: "Nein. Wir stellen bewusst keine Teilnahme-Zertifikate aus. Der Wert der Kurse liegt im Wissen selbst, nicht in einem Papier. Wer das Thema verstanden hat, merkt das in der ersten praktischen Entscheidung.",
  },
  {
    q: "Was unterscheidet die Kurse von YouTube-Tutorials?",
    a: "Struktur, Tiefe und Kontext. Wir erklären nicht nur das Wie, sondern vor allem das Wann-sinnvoll-wann-nicht — die Entscheidungsebene. Und alle Inhalte kommen aus echten Beratungsmandaten, nicht aus Hype-Zyklen.",
  },
  {
    q: "Brauche ich zusätzlich eine Beratung?",
    a: "In den meisten Fällen nicht. Die Academy deckt ab, was Sie für eigenständige Entscheidungen brauchen. Eine Beratung macht erst Sinn, wenn Sie einen konkreten Use Case bewerten oder vergleichen lassen wollen — dafür gibt es die zwei Beratungs-Bausteine oben.",
  },
  {
    q: "Wie sicher ist die Bezahlung?",
    a: "Bezahlung über Stripe (Kreditkarte, SEPA) oder PayPal — beide mit allen gängigen Käuferschutz-Mechanismen. Rechnung auf das Unternehmen möglich, inkl. USt-ID.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-white border-t border-slate-100">
      <div className="container-xl max-w-3xl">
        <div className="text-center mb-12">
          <div className="kicker mb-3">Häufige Fragen</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-800">
            Was Sie vor dem Kauf wissen sollten
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-heading font-semibold text-slate-800 text-lg">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-slate-800 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
