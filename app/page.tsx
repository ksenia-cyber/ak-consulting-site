import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import AcademyTeaser from "@/components/AcademyTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Value Props */}
        <USPs />
        {/* 3. Academy — prominent */}
        <AcademyTeaser />
        {/* 4. Wie funktioniert die Academy (3 Schritte) */}
        <Approach />
        {/* 5. Testimonials */}
        <Testimonials />
        {/* 6. Über uns / Instructor */}
        <About />
        {/* 7. Beratung kompakt (2 Bausteine) */}
        <Services />
        {/* 8. Blog-Teaser */}
        <BlogTeaser />
        {/* 9. FAQ */}
        <FAQ />
        {/* 10. Kontakt */}
        <Contact />
      </main>
      {/* 11. Newsletter */}
      <Newsletter />
      {/* 12. Footer */}
      <Footer />
    </>
  );
}
