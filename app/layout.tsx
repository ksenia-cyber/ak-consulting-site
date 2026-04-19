import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "A&K Consulting — KI-Strategieberatung für den Mittelstand",
  description:
    "Strategische Beratung zu KI-Prozessoptimierung und Voice AI für den DACH-Mittelstand. Online-Academy + individuelle Beratung für Entscheider.",
  keywords: [
    "KI-Beratung",
    "AI Consulting",
    "Voice AI",
    "Mittelstand",
    "DACH",
    "KI-Academy",
    "Prompt Engineering",
  ],
  openGraph: {
    title: "A&K Consulting — KI verstehen. Souverän entscheiden.",
    description:
      "Akademie + Beratung: Erst das Fundament durch die Academy, dann individuelle Empfehlungen. Für Entscheider im deutschsprachigen Mittelstand.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
