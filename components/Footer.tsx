import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8">
      <div className="container-xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-900 text-white font-black flex items-center justify-center text-sm">
                AK
              </div>
              <span className="font-heading font-bold text-white text-lg">
                A&amp;K Consulting
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strategische KI-Beratung für den DACH-Mittelstand. Academy &amp;
              Consulting im hybriden Modell.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-white">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-3">Rechtliches</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-white">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-3">Kontakt</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                kontakt@consultingak.de
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} A&amp;K Consulting · consultingak.de</div>
          <div>Mockup · Platzhalter-Inhalte</div>
        </div>
      </div>
    </footer>
  );
}
