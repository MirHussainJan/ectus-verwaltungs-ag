import ArbitrageDetails from "../../components/arbitrage/arbitrage-details";
import ArbitrageHeroSection from "../../components/arbitrage/hero-section";
import Footer from "../../components/footer";
import Header from "../../components/header";

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
