"use client";

import React, { useState } from "react";
import styles from "./LanguagePopover.module.scss";
import { Global } from "iconsax-reactjs";

type Position =
  | "center"
  | "top-left"
  | "top-right"
  | "top-middle"
  | "bottom-left"
  | "bottom-right"
  | "bottom-middle"
  | "left-middle"
  | "right-middle";

const regions = [
  { id: "global", name: "Global", flag: "🌍" },
  { id: "algeria", name: "Algeria", flag: "🇩🇿" },
  { id: "brazil", name: "Brazil", flag: "🇧🇷" },
  { id: "egypt", name: "Egypt", flag: "🇪🇬" },
  { id: "ghana", name: "Ghana", flag: "🇬🇭" },
  { id: "india", name: "India", flag: "🇮🇳" },
  { id: "indonesia", name: "Indonesia", flag: "🇮🇩" },
  { id: "kenya", name: "Kenya", flag: "🇰🇪" },
  { id: "mexico", name: "Mexico", flag: "🇲🇽" },
  { id: "morocco", name: "Morocco", flag: "🇲🇦" },
  { id: "philippines", name: "Philippines", flag: "🇵🇭" },
  { id: "south-africa", name: "South Africa", flag: "🇿🇦" },
  { id: "tanzania", name: "Tanzania", flag: "🇹🇿" },
];

const positions: Position[] = [
  "top-left",
  "top-middle",
  "top-right",
  "left-middle",
  "center",
  "right-middle",
  "bottom-left",
  "bottom-middle",
  "bottom-right",
];

const LanguagePopover = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>("center");
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("egypt");

  return (
    <div className={styles.wrapper}>
      {/* Position Controls
      <div className={styles.controls}>
        {positions.map((pos) => (
          <button
            key={pos}
            className={`${styles.posBtn} ${
              position === pos ? styles.active : ""
            }`}
            onClick={() => setPosition(pos)}
          >
            {pos}
          </button>
        ))}
      </div> */}

      {/* Trigger */}
      <button
        // className={styles.openBtn}
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 text-md uppercase"
      >
        <Global size="20" color="#1c1c1c" variant="TwoTone" />{" "}
        {language.toUpperCase()}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className={`${styles.backdrop} ${open ? styles.in : ""}`}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      <div
        className={`${styles.modal} ${
          open ? `${styles.visible} ${styles.in}` : ""
        } ${styles[`pos-${position}`]}`}
      >
        <div className={styles.header}>
          <span>Select your language</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Language Tabs */}
        <div className={styles.tabs}>
          <button
            className={language === "en" ? styles.active : ""}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className={language === "es" ? styles.active : ""}
            onClick={() => setLanguage("es")}
          >
            Spanish
          </button>
        </div>

        <div className={styles.sectionLabel}>Select your region</div>

        {/* Regions */}
        <div className={styles.grid}>
          {regions.map((r) => (
            <div
              key={r.id}
              className={`${styles.regionItem} ${
                region === r.id ? styles.active : ""
              }`}
              onClick={() => setRegion(r.id)}
            >
              <span className={styles.flag}>{r.flag}</span>
              <span>{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagePopover;
