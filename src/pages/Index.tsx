import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductSelector from "@/components/ProductSelector";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProductSelector />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
