import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article>
          <div className={`h-64 md:h-80 bg-gradient-to-br ${post.gradient}`} />

          <div className="container-xl px-6 -mt-20 relative">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <div className="prose prose-slate mt-8 max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {post.excerpt}
                </p>

                <h2 className="font-heading text-2xl font-bold text-slate-900 mt-10">
                  Was dieser Beitrag beantwortet
                </h2>
                <p className="text-slate-700 leading-relaxed mt-3">
                  Dieser Artikel ist ein Platzhalter-Beitrag für das
                  Website-Mockup. Der finale Content wird von A&amp;K Consulting
                  bzw. redaktionell eingepflegt &mdash; die Struktur (H1/H2/H3,
                  Absätze, ggf. Bilder) ist bereits vorbereitet und entspricht den
                  SEO-Anforderungen aus RankMath.
                </p>

                <h3 className="font-heading text-xl font-bold text-slate-900 mt-8">
                  Typischer Aufbau eines Artikels
                </h3>
                <p className="text-slate-700 leading-relaxed mt-3">
                  Einstieg (Problem), klare These, drei bis fünf Hauptpunkte mit
                  konkreten Beispielen, Zusammenfassung mit Handlungsempfehlung.
                  Zielgruppe: Geschäftsführung, Bereichsleitung, strategische
                  Rollen im Mittelstand.
                </p>

                <h3 className="font-heading text-xl font-bold text-slate-900 mt-8">
                  Call-to-Action
                </h3>
                <p className="text-slate-700 leading-relaxed mt-3">
                  Am Ende jedes Beitrags weisen wir dezent auf passende Angebote
                  hin &mdash; entweder einen Kurs aus der Academy oder eine
                  Erstberatung. Niemals aufdringlich, sondern als logische
                  Fortsetzung des Themas.
                </p>

                <div className="mt-10 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                  <div className="font-semibold text-indigo-900">
                    Passende Beratung gesucht?
                  </div>
                  <p className="text-indigo-800 text-sm mt-1">
                    Wir zeigen Ihnen, wie Sie KI-Themen strategisch in Ihrem
                    Unternehmen verankern.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex btn-primary"
                  >
                    Beratung anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-20" />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
