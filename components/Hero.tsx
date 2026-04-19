import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-center px-6 py-20 md:py-28">
        <div>
          <div className="kicker mb-5">Strategische KI-Beratung · DACH</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-[1.1]">
            KI verstehen.<br />
            <span className="text-slate-800">Souverän entscheiden.</span>
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
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Fokus auf Mittelstand
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Praxiserprobt
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Kein Tech-Jargon
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Strategische Beratung im Meeting"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-800/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-xs uppercase tracking-widest text-amber-300 mb-2">
                A&amp;K Consulting
              </div>
              <div className="font-heading text-2xl font-bold leading-tight">
                Klarheit in komplexen KI-Entscheidungen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
