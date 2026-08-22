import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BenefitsBar from "@/components/sections/BenefitsBar";
import About from "@/components/sections/About";
import Accommodations from "@/components/sections/Accommodations";
import Amenities from "@/components/sections/Amenities";
import Breakfast from "@/components/sections/Breakfast";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import LongStay from "@/components/sections/LongStay";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import { MobileConversionBar } from "@/components/ui/MobileConversionBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsBar />
        <About />
        <Accommodations />
        <Amenities />
        <Breakfast />
        <Location />
        <Reviews />
        <LongStay />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <MobileConversionBar />
    </>
  );
}
