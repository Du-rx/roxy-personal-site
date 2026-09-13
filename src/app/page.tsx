import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentlyBuilding />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
