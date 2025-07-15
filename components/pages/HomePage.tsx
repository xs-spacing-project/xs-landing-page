import React from "react";
import Hero from "../Hero";
import Features from "../Features";
import ParallaxSection from "../ParallaxSection";
import HowItWorks from "../HowItWorks";
import AboutSection from "../AboutSection";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import CTASection from "../CTASection";

const HomePage = (): React.ReactNode => {
  return (
    <>
      <Hero />
      <Features />
      <ParallaxSection />
      <HowItWorks />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
};

export default HomePage;
