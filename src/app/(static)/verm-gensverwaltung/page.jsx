import CallToActionSection from "@/features/home/asset-management/call-to-action";
import AssetManagementHeroSection from "@/features/home/asset-management/hero-section";
import WelcomMessageSection from "@/features/home/asset-management/message-section";
import Footer from "@/features/home/footer";
import Header from "@/features/home/header";

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
