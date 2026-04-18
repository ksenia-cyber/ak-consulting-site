import Link from "next/link";
import CourseCard from "./CourseCard";
import { courses } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export default function AcademyTeaser() {
  return (
    <section id="academy" className="section bg-white border-t border-slate-100">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="kicker mb-3">Academy</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
            Kurse für Entscheider
          </h2>
          <p className="mt-4 text-slate-600">
            Fundiertes KI-Wissen aus echter Beratungspraxis — modular, verständlich
            und ohne unnötigen Technik-Ballast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/academy" className="btn-outline">
            Alle Kurse ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
