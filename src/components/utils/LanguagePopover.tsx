"use client";

import { useState } from "react";
import styles from "./LanguagePopover.module.scss";
import { Global } from "iconsax-reactjs";
import Modal from "../common/modal";
import { MdGTranslate } from "react-icons/md";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  // Add more languages here if needed
];

const LanguagePopover = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const switchLocale = (newLocale: string) => {
    // Replace the locale segment in the current path
    const segments = pathname.split("/");
    segments[1] = newLocale; // [0] is "", [1] is the locale
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className={styles.nations_wrapper}>
      <button
        className={styles.openBtn}
        onClick={() => setOpen(true)}
        popoverTarget="mypopover"
      >
        <Global size="20" color="#1c1c1c" variant="TwoTone" />{" "}
        {language.toUpperCase()}
      </button>

      <Modal id="mypopover">
        <div className={styles.languages}>
          <div className={styles.header}>
            <span>Select your language</span>
          </div>

          <ul className={styles.tabs}>
            {languages.map((lang) => (
              <li
                key={lang.code}
                className={language === lang.code ? styles.active : ""}
                onClick={() => setLanguage(lang.code)}
              >
                <MdGTranslate />
                <span>{lang.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default LanguagePopover;
