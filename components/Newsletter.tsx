"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-white py-14 border-t border-slate-100">
      <div className="container-xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="kicker mb-2">Newsletter</div>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900">
            Wöchentliche KI-News für Entscheider
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Die relevantesten KI-Entwicklungen der Woche — kompakt
            zusammengefasst, kurz erklärt, mit konkreten Themen, auf die Sie als
            Führungskraft achten sollten. Jeden Montag in Ihrem Postfach.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
        >
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
            <Mail className="w-4 h-4" />
            Kostenfrei · Jederzeit abbestellbar
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="ihre.email@unternehmen.de"
              className="flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
            />
            <button className="bg-slate-900 hover:bg-slate-950 text-white font-semibold px-5 py-2.5 rounded-lg transition whitespace-nowrap">
              Abonnieren
            </button>
          </div>
          <label className="mt-3 flex items-start gap-2 text-xs text-slate-500">
            <input type="checkbox" required className="mt-0.5 accent-slate-900" />
            <span>
              Ich stimme zu, Newsletter zu erhalten, und habe die{" "}
              <a href="/datenschutz" className="text-slate-900 underline">
                Datenschutzerklärung
              </a>{" "}
              zur Kenntnis genommen.
            </span>
          </label>
          {sent && (
            <div className="mt-3 p-2.5 bg-amber-50 text-slate-900 text-xs rounded-md border border-amber-200">
              ✓ Demo: Anmeldung erfasst. (Im Mockup nicht verbunden.)
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
