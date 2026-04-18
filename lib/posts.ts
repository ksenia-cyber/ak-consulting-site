export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  gradient: string;
};

export const posts: Post[] = [
  {
    slug: "voice-ai-mittelstand",
    title:
      "Was Voice AI wirklich für den Mittelstand leisten kann — und was nicht",
    excerpt:
      "Ein realistischer Blick auf Sprach-KI jenseits des Marketing-Glanzes: Wo Voice-Assistenten heute echten Mehrwert bringen und wo sie noch an Grenzen stoßen.",
    category: "Voice AI",
    date: "14. April 2026",
    author: "A&K Consulting",
    readTime: "6 Min.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    slug: "prompt-fehler-entscheider",
    title: "5 Prompt-Engineering-Fehler, die Führungskräften Zeit kosten",
    excerpt:
      "Die meisten KI-Enttäuschungen im Management-Alltag haben wenig mit dem Modell zu tun — sondern mit wie man es bittet. Fünf häufige Fehler und wie Sie sie vermeiden.",
    category: "Prompt Engineering",
    date: "08. April 2026",
    author: "A&K Consulting",
    readTime: "5 Min.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    slug: "ki-einfuehrung-unternehmen",
    title: "KI im Unternehmen einführen — wo sinnvoll anfangen?",
    excerpt:
      "Das größte Risiko bei KI-Projekten ist nicht die Technologie, sondern der falsche Startpunkt. Ein pragmatischer Fahrplan für die ersten 90 Tage.",
    category: "KI-Strategie",
    date: "02. April 2026",
    author: "A&K Consulting",
    readTime: "8 Min.",
    gradient: "from-indigo-500 to-indigo-700",
  },
];
