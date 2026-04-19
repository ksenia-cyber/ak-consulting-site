"use client";

import { Mail, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="section bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-30" />

      <div className="container-xl grid lg:grid-cols-2 gap-12 items-start relative">
        <div className="text-white">
          <div className="kicker mb-3 !text-amber-200">Kontakt</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Bereit, KI strategisch in Ihrem Unternehmen einzusetzen?
          </h2>
          <p className="mt-5 text-amber-100 text-lg leading-relaxed">
            Schreiben Sie uns kurz, worum es geht — wir melden uns innerhalb von
            einem Werktag zurück.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3 text-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-300">
                  E-Mail
                </div>
                <div className="text-white font-medium">
                  kontakt@consultingak.de
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-300">
                  Telefon
                </div>
                <div className="text-white font-medium">+49 000 000 000 00</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-300">
                  Erreichbarkeit
                </div>
                <div className="text-white font-medium">
                  Mo–Fr · 9:00–17:00 Uhr
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl p-7 md:p-8 shadow-2xl"
        >
          <h3 className="font-heading font-bold text-xl text-slate-900 mb-6">
            Beratung anfragen
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Vorname" name="first" />
            <Field label="Nachname" name="last" />
          </div>
          <Field label="Unternehmen" name="company" className="mt-4" />
          <Field label="E-Mail" name="email" type="email" className="mt-4" />
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nachricht
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
              placeholder="Worum geht's? In 2-3 Sätzen reicht."
            />
          </div>
          <label className="mt-4 flex items-start gap-2 text-xs text-slate-600">
            <input
              type="checkbox"
              required
              className="mt-0.5 accent-slate-900"
            />
            <span>
              Ich stimme der Verarbeitung meiner Daten gemäß{" "}
              <a href="/datenschutz" className="text-slate-900 underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-semibold py-3 rounded-lg transition shadow-lg shadow-slate-900/30"
          >
            <Send className="w-4 h-4" />
            Anfrage senden
          </button>

          {sent && (
            <div className="mt-4 p-3 bg-amber-50 text-slate-900 text-sm rounded-lg border border-amber-200">
              ✓ Demo: Anfrage erfasst. (Formular ist im Mockup nicht verbunden.)
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
      />
    </div>
  );
}
