import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Personas } from "@/components/Personas";
import { Services } from "@/components/Services";
import { Plans } from "@/components/Plans";
import { Cases } from "@/components/Cases";
import { Stats } from "@/components/Stats";
import { Workflow } from "@/components/Workflow";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { ReviewSystem } from "@/components/ReviewSystem";
import { Investment } from "@/components/Investment";
import { StatsCounter } from "@/components/StatsCounter";
import { PreBookingForm } from "@/components/PreBookingForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2C2A]">
      <Navigation />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Live client counter (animated, Supabase-backed) */}
        <StatsCounter />

        {/* Section 2: Personas */}
        <Personas />

        {/* Section 3: Services */}
        <Services />

        {/* Section 4: Plans */}
        <Plans />

        {/* Section 5: Mini Cases */}
        <Cases />

        {/* Section 6: Credibility & Stats */}
        <Stats />
        <ReviewSystem />

        {/* Section 7: Gallery */}
        <Gallery />

        {/* Section 8: Investment Details */}
        <Investment />

        {/* Section 9: How it works */}
        <Workflow />

        {/* Section 10: Pre-booking form (Supabase-backed) */}
        <PreBookingForm />

        {/* Section 11: Final CTA & Contact */}
        <Footer />
      </main>
    </div>
  );
}
