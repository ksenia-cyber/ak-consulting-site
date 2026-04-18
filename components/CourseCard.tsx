import Link from "next/link";
import { Course } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export default function CourseCard({ c }: { c: Course }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <div
        className={`h-40 bg-gradient-to-br ${c.image} relative flex items-end p-5`}
      >
        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-slate-900">
          {c.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
          {c.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1 italic">{c.subtitle}</p>
        <p className="text-slate-600 text-sm mt-3 leading-relaxed">
          {c.description}
        </p>

        <ul className="mt-5 space-y-2">
          {c.checks.map((ch) => (
            <li key={ch} className="check-item">
              {ch}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="text-slate-900 font-heading font-bold text-lg">
            {c.price}
          </div>
          <Link
            href={`/academy#${c.slug}`}
            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm hover:gap-2.5 transition-all"
          >
            Kurs ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
