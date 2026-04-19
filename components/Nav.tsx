import Link from "next/link";

type Props = { transparent?: boolean };

export default function Nav({ transparent = false }: Props) {
  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur ${transparent ? "bg-white/70" : "bg-white/90"} border-b border-slate-100`}
    >
      <div className="container-xl flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-800 to-amber-400 text-white font-black flex items-center justify-center text-sm">
            AK
          </div>
          <span className="font-heading font-bold text-slate-800 text-lg tracking-tight">
            A&amp;K Consulting
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <Link href="/#services" className="hover:text-slate-800">
            Leistungen
          </Link>
          <Link href="/academy" className="hover:text-slate-800">
            Academy
          </Link>
          <Link href="/blog" className="hover:text-slate-800">
            Blog
          </Link>
          <Link href="/#about" className="hover:text-slate-800">
            Über uns
          </Link>
          <Link href="/#contact" className="hover:text-slate-800">
            Kontakt
          </Link>
        </nav>

        <Link href="/#contact" className="btn-primary text-sm py-2.5 px-4">
          Beratung anfragen
        </Link>
      </div>
    </header>
  );
}
