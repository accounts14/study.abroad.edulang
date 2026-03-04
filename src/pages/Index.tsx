import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import UniversitasPreview from "@/components/home/UniversitasPreview";
import PeranSection from "@/components/home/PeranSection";
import TargetAudience from "@/components/home/TargetAudience";
import WhyStudyAbroad from "@/components/home/WhyStudyAbroad";
import AlurSection from "@/components/home/AlurSection";
import WhyEdulang from "@/components/home/WhyEdulang";
import OpportunitiesSection from "@/components/home/OpportunitiesSection";
import TestimoniSection from "@/components/home/TestimoniSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <UniversitasPreview />
        <PeranSection />
        <TargetAudience />
        <WhyStudyAbroad />
        <AlurSection />
        <WhyEdulang />
        <OpportunitiesSection />
        <TestimoniSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
