import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Approach />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <FAQ />
      <Footer />
    </>
  );
}
