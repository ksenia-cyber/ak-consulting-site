import LegalStub from "@/components/LegalStub";

export const metadata = { title: "Impressum — A&K Consulting" };

export default function Page() {
  return (
    <LegalStub
      title="Impressum"
      intro="Angaben gemäß § 5 TMG werden hier veröffentlicht."
    />
  );
}
