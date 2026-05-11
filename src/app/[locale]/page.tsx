import React from "react";
import ConversionSection from "@/app/[locale]/(home)/_components/conversion";
import HeroSection from "./(home)/_components/hero";
import Features from "./(home)/_components/features";
import Stats from "./(home)/_components/stats";

const page = () => {
  return (
    <div>
      <section>
        <HeroSection />
        <Stats />
        <ConversionSection />
        {/* <Features /> */}
      </section>
    </div>
  );
};

export default page;
