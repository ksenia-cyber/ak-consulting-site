import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/posts";

export default function BlogTeaser() {
  return (
    <section id="blog" className="section bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className="kicker mb-3">Blog</div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
              Aktuelle Beiträge
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold hover:gap-2.5 transition-all"
          >
            Alle Beiträge
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className={`h-44 bg-gradient-to-br ${p.gradient} relative flex items-end p-5`}
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
                <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
