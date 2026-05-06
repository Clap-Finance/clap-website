import { useTranslations } from "next-intl";
import React from "react";
import styles from "./styles/Hero.module.scss";
import Button from "@/components/common/button";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <h1>{t("heroSection.title")}</h1>
        <Button variant={"secondary"}>
          {t("heroSection.cta")}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
