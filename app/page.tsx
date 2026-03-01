import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Programs />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
