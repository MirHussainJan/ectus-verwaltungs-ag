import CallToActionSection from "../../components/asset-management/call-to-action";
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
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default AssetManagementPage;
