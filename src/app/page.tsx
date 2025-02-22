import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
