import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LegalStub({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="container-xl px-6 py-16 max-w-3xl">
          <div className="kicker mb-3">Rechtliches</div>
          <h1 className="font-heading text-4xl font-extrabold text-slate-900">
            {title}
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">{intro}</p>

          <div className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-200">
            <div className="font-semibold text-amber-900">
              Platzhalter-Seite
            </div>
            <p className="text-amber-800 text-sm mt-2 leading-relaxed">
              Der finale Rechtstext wird nachträglich vom Kunden bzw. einem
              Rechtsanwalt eingepflegt. Die Seite existiert bereits in der
              Menüstruktur und ist SEO-technisch erfasst.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
