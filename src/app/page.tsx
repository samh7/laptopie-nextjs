import LaptopTips from "../components/index/LaptopTips";
import Testimonials from "../components/index/Testimonials";
import PricingSection from "../components/index/PricingSection";
import CTASection from "../components/index/CTASection";
import UseCases from "../components/index/UseCases";
import FeaturesSection from "../components/index/FeaturesSection";
import HeroSection from "../components/index/HeroSection";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function Index() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }

  return (
    <div className="min-h-screen min-w-screen">
      <div className="w-screen">
        <Header userLoggedIn={session ? true : false} />
        <HeroSection />
      </div>

      <div className="w-screen flex flex-col items-center justify-center">
        {/* <div className="container"> */}
        <FeaturesSection />
        <UseCases />
        <LaptopTips />
        <Testimonials />
        <PricingSection />
        {/* <FAQSection /> */}
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
