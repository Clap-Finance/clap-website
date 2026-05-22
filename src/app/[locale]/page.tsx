import ConversionSection from "@/app/[locale]/(home)/_components/conversion";
import HeroSection from "./(home)/_components/hero";
import Stats from "./(home)/_components/stats";

const Page = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <ConversionSection />
    </>
  );
};

export default Page;
