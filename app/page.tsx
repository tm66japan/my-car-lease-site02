import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const AdCreativeGenerator = dynamic(
  () => import("@/components/AdCreativeGenerator"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AdCreativeGenerator />
      <Simulator />
      <ComparisonTable />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
