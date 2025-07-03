import Hero from "@/components/Hero";
import About from "@/components/About";
import TherapyIntro from "@/components/TherapyIntro";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <TherapyIntro />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <Rates />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
