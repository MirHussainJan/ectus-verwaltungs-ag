import ArbitrageDetails from "@/features/home/arbitrage/arbitrage-details";
import ArbitrageHeroSection from "@/features/home/arbitrage/hero-section";
import Footer from "@/features/home/footer";
import Header from "@/features/home/header";

const ArbitragePage = () => {
  return (
    <>
      <Header />
      <ArbitrageHeroSection />
      <ArbitrageDetails />
      <Footer />
    </>
  );
};

export default ArbitragePage;
