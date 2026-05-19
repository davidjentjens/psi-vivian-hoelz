import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Identification from "@/components/Identification";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Approach />
      <SectionDivider />
      <Identification />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <FAQ />
      <Footer />
    </>
  );
}
