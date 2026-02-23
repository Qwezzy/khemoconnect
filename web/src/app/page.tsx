import { Hero } from "@/components/Hero"
import { ComparisonTable } from "@/components/ComparisonTable"
import { CorePillars } from "@/components/CorePillars"
import { SocialProof } from "@/components/SocialProof"
import { LeadMagnet } from "@/components/LeadMagnet"
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30">

      <Hero />
      <SocialProof />
      <ComparisonTable />
      <CorePillars />
      <LeadMagnet />
    </main>
  );
}
