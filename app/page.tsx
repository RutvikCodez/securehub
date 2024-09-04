import Contact from "@/components/landingPage/Contact";
import EmailValidator from "@/components/landingPage/EmailValidator";
import FAQ from "@/components/landingPage/FAQ";
import Hero from "@/components/landingPage/Hero";
import PasswordManager from "@/components/landingPage/PasswordManager";
import Pricing from "@/components/landingPage/Pricing";

export default function Home() {
  return (
   <main>
    <Hero />
    <EmailValidator />
    <PasswordManager />
    <Pricing />
    <FAQ />
    <Contact />
   </main>
  );
}
