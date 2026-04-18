import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="font-heading text-6xl font-black opacity-20">AK</div>
                <div className="mt-4 text-xs uppercase tracking-widest opacity-70">
                  Platzhalter Portrait
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="kicker mb-3">Über uns</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
            Verstehen statt Black Box
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            A&amp;K Consulting begleitet den deutschsprachigen Mittelstand bei
            strategischen KI-Entscheidungen. Wir sind überzeugt: Wer die
            Funktionsweise und Grenzen von KI wirklich versteht, trifft bessere
            Entscheidungen &mdash; und spart sich teure Umwege.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Unser hybrides Modell verbindet eine praxisnahe Online-Academy mit
            individueller Beratung. Die Umsetzung verantworten Sie selbst oder
            externe Implementierungspartner &mdash; wir konzentrieren uns auf
            Strategie, Konzeption und Enablement.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <div className="font-heading text-3xl font-extrabold text-indigo-600">
                15+
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Jahre Consulting-Erfahrung
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-extrabold text-indigo-600">
                DACH
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Mittelstand-Fokus
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-extrabold text-indigo-600">
                100%
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Strategie-Fokus
              </div>
            </div>
          </div>

          <Link href="#contact" className="btn-primary mt-8">
            Kontakt aufnehmen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
