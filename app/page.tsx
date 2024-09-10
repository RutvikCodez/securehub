import Contact from "@/components/landingPage/Contact";
import Hero from "@/components/landingPage/Hero";
import Pricing from "@/components/landingPage/Pricing";
import Services from "@/components/landingPage/Services";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Contact />
    </main>
  );
}
