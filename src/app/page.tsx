"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChoiceParalysis from "@/components/index/ChoiceParalysis";
import LaptopTips from "@/components/index/LaptopTips";
import Testimonials from "@/components/index/Testimonials";
import PricingSection from "@/components/index/PricingSection";
import FAQSection from "@/components/index/FAQSection";
import CTASection from "@/components/index/CTASection";
import UseCases from "@/components/index/UseCases";
import FeaturesSection from "@/components/index/FeaturesSection";

// Define the use cases data
export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <FeaturesSection />
      <FeaturesSection />
      <UseCases />
      <ChoiceParalysis />
      <LaptopTips />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />

      <Footer />
    </div>
  );
}
