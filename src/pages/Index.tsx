import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import FeaturesSection from "@/components/ui/features-section";
import HelpSection from "@/components/ui/help-section";
import ResourcesSection from "@/components/ui/resources-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HelpSection />
        <ResourcesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
