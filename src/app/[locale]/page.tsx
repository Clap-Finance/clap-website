import ConversionSection from "@/app/[locale]/(home)/_components/conversion";
import HeroSection from "./(home)/_components/hero";
import Stats from "./(home)/_components/stats";
import FAQSection from "@/components/common/faqs";

const Page = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <ConversionSection />
      <FAQSection />
    </>
  );
};

export default Page;
