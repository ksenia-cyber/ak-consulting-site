import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { courses } from "@/lib/courses";
import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";

export const metadata = {
  title: "Academy — A&K Consulting",
  description:
    "Praxisorientierte Online-Kurse zu KI, Voice AI und Prompt Engineering für Entscheider im Mittelstand.",
};

export default function AcademyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-emerald-50 via-white to-white pt-16 pb-12">
          <div className="container-xl px-6">
            <div className="kicker mb-3">Academy</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 max-w-3xl leading-tight">
              Kurse für Entscheider &mdash; solides KI-Wissen aus der Praxis
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Alle Kurse sind modular aufgebaut und enthalten ausgewählte
              Free-Preview-Lektionen. Bezahlung bequem per Kreditkarte, SEPA oder
              PayPal.
            </p>
          </div>
        </section>

        <section id="course-list" className="section bg-white">
          <div className="container-xl">
            <div className="space-y-8">
              {courses.map((c) => (
                <article
                  key={c.slug}
                  id={c.slug}
                  className="grid md:grid-cols-3 gap-0 bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div
                    className={`h-48 md:h-full bg-gradient-to-br ${c.image} p-6 flex flex-col justify-between text-white`}
                  >
                    <span className="inline-block w-fit px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold">
                      {c.category}
                    </span>
                    <div>
                      <BookOpen className="w-8 h-8 opacity-80" />
                      <div className="mt-3 font-heading font-extrabold text-3xl">
                        {c.price}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-7">
                    <h2 className="font-heading font-bold text-2xl text-slate-900">
                      {c.title}
                    </h2>
                    <p className="text-slate-500 mt-1 italic">{c.subtitle}</p>
                    <p className="text-slate-600 mt-4 leading-relaxed">
                      {c.description}
                    </p>

                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {c.checks.map((ch) => (
                        <li key={ch} className="check-item">
                          {ch}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3 items-center">
                      <button className="btn-primary">
                        Jetzt einschreiben
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      {c.slug === "ki-grundlagen" && (
                        <button className="btn-outline">
                          <PlayCircle className="w-4 h-4" />
                          Free Preview
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-slate-50 border border-slate-100 p-8 text-center">
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Weitere Kurse folgen
              </h3>
              <p className="mt-2 text-slate-600 max-w-lg mx-auto">
                Wir bauen die Academy kontinuierlich aus. Abonnieren Sie den
                Newsletter, um als Erste:r über neue Kurse informiert zu werden.
              </p>
              <Link href="/#contact" className="btn-primary mt-5">
                Beratung anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
