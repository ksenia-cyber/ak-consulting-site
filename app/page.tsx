import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import AcademyTeaser from "@/components/AcademyTeaser";
import BlogTeaser from "@/components/BlogTeaser";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <USPs />
        <Approach />
        <Services />
        <AcademyTeaser />
        <BlogTeaser />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
