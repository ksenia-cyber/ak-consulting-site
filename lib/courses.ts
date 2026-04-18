export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  checks: string[];
  price: string;
  image: string;
};

export const courses: Course[] = [
  {
    slug: "ki-grundlagen",
    title: "KI-Grundlagen — Wie KI wirklich funktioniert",
    subtitle: "Für Entscheider, die hinter die Black Box schauen wollen",
    category: "Grundlagen",
    description:
      "Solides Basisverständnis zu LLMs, Trainingsdaten, Tokens, Kontext, Halluzinationen und den Grenzen aktueller KI-Systeme — mit Praxisbeispielen aus der Beratung.",
    checks: [
      "Wie LLMs technisch aufgebaut sind und 'denken'",
      "Stärken, Grenzen und typische Fehlermodi",
      "EU AI Act & Datenschutz im Überblick",
      "Konkrete Schritte für den Unternehmenseinsatz",
    ],
    price: "ab 249 €",
    image: "from-indigo-500 to-indigo-700",
  },
  {
    slug: "voice-ai",
    title: "Voice AI — Sprach-KI in der Praxis",
    subtitle: "Vom Telefon-Assistenten zur Terminbuchung",
    category: "Voice AI",
    description:
      "Wie Voice-AI-Systeme aufgebaut sind, wo sie Sinn ergeben und welche Anbieter und Architekturen es gibt. Ziel: Bewertungs- und Entscheidungskompetenz.",
    checks: [
      "Architektur von Voice-AI-Systemen",
      "Einsatzszenarien im Mittelstand",
      "Anbietervergleich & Auswahlkriterien",
      "Entscheidungsrahmen für Ihren Fall",
    ],
    price: "ab 349 €",
    image: "from-emerald-500 to-emerald-700",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering für Führungskräfte",
    subtitle: "Präzise Ergebnisse aus KI-Systemen — ohne Technik-Hintergrund",
    category: "Prompting",
    description:
      "Praxisorientiertes Prompt Engineering mit Vorlagen, Mustern und Beispielen aus realen Business-Kontexten.",
    checks: [
      "Prinzipien guter Prompts",
      "Bewährte Muster & Vorlagen",
      "Prompts für typische Business-Aufgaben",
      "Eigene Prompt-Bibliothek aufbauen",
    ],
    price: "ab 199 €",
    image: "from-amber-500 to-orange-600",
  },
];
