import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Simulator />
      <ComparisonTable />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
