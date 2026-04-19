import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-center px-6 py-20 md:py-28">
        <div>
          <div className="kicker mb-5">Strategische KI-Beratung · DACH</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            KI verstehen.<br />
            <span className="text-slate-900">Souverän entscheiden.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Wir zeigen Ihnen, wie künstliche Intelligenz in Ihrem Unternehmen
            wirklich funktioniert &mdash; mit fundierten Online-Kursen und
            individueller Beratung, speziell für Entscheider im deutschsprachigen
            Mittelstand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/academy" className="btn-primary">
              <BookOpen className="w-4 h-4" />
              Kurse ansehen
            </Link>
            <Link href="#contact" className="btn-outline">
              Beratung anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Fokus auf Mittelstand
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Praxiserprobt
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Kein Tech-Jargon
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-slate-950 rounded-3xl rotate-3" />
            <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-2xl -rotate-3 flex items-center justify-center">
              <div className="text-center p-10">
                <div className="text-7xl font-heading font-black text-slate-900 mb-4">
                  A&amp;K
                </div>
                <div className="text-slate-600 text-sm uppercase tracking-widest">
                  Consulting
                </div>
                <div className="mt-6 inline-block px-4 py-2 bg-amber-50 text-slate-950 rounded-full text-xs font-semibold">
                  KI · Voice AI · Prompt Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
