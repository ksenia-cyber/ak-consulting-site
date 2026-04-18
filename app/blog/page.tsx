import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";
import Link from "next/link";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Blog — A&K Consulting",
  description:
    "Artikel zu KI-Strategie, Voice AI und Prompt Engineering für Entscheider im deutschsprachigen Mittelstand.",
};

const categories = [
  "Alle",
  "KI-Grundlagen",
  "Voice AI",
  "Prompt Engineering",
  "KI-Strategie",
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-indigo-50 via-white to-white pt-16 pb-10">
          <div className="container-xl px-6">
            <div className="kicker mb-3">Blog</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 max-w-3xl leading-tight">
              Gedanken, Einschätzungen &amp; Orientierungshilfen
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Pragmatische Perspektiven auf aktuelle KI-Themen &mdash; geschrieben
              für Entscheider, nicht für Tech-Insider.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={`text-sm px-4 py-1.5 rounded-full border transition ${
                    i === 0
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-10 bg-white">
          <div className="container-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-end p-5`}
                  >
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-slate-900">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span>{p.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {p.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
