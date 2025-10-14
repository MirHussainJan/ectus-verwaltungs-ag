import AssetManagementHeroSection from "../../components/asset-management/hero-section";
import WelcomMessageSection from "../../components/asset-management/message-section";
import Footer from "../../components/footer";
import Header from "../../components/header";

const AssetManagementPage = () => {
  return (
    <>
      <Header />
      <AssetManagementHeroSection />
      <WelcomMessageSection />
      <Footer />
    </>
  );
};

export default AssetManagementPage;
