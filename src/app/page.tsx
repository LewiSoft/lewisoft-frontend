import { ClientStrip } from "@/components/sections/client-strip";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <Services />
      <FeaturedWork />
      <Stats />
      <Process />
      <Team />
      <Testimonials />
      <ContactCta />
    </>
  );
}
