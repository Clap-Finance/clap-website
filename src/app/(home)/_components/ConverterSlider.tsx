"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./styles/ConverterSlider.module.scss";

const slides = [
  {
    id: "cs1",
    num: "01",
    heading: ["Borderless Money", "Transfers"],
    bg: "url(https://images.unsplash.com/photo-1739285988559-1f72f4792771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    orb: "#3d6fff",
  },
  {
    id: "cs2",
    num: "02",
    heading: ["Instant", "Conversions"],
    bg: "url(https://images.unsplash.com/photo-1758874573124-ce0a74888dc9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    orb: "#b5ff4d",
  },
  {
    id: "cs3",
    num: "03",
    heading: ["Smart", "Wallets"],
    bg: "linear-gradient(140deg,#1a0a2e 0%,#2d1060 55%,#4a1fa8 100%)",
    orb: "#c77dff",
  },
  {
    id: "cs4",
    num: "04",
    heading: ["Effortless", "Payments"],
    bg: "linear-gradient(140deg,#1f0a0a 0%,#3d1010 55%,#6b1a1a 100%)",
    orb: "#ff6b6b",
  },
];

const ConverterSlider = () => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCur(i);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const s = slides[cur];

  return (
    <div className={style.wrapper}>
      {/* Card */}
      <div
        className={style.card}
        style={{
          background: s.bg,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <div className={style.overlay} />

        <div className={style.scene}>
          <div />
          <div className={style.bottom}>
            <span className={style.label}>[{s.num}]</span>
            <div className={style.headingRow}>
              <h2 className={style.heading}>
                {s.heading[0]}
                <br />
                {s.heading[1]}
              </h2>
              <svg
                className={style.sparkle}
                style={{ color: s.orb }}
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M14 2 L15.6 10.4 L24 12 L15.6 13.6 L14 22 L12.4 13.6 L4 12 L12.4 10.4 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={style.track}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${style.tick} ${i === cur ? style.active : ""}`}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConverterSlider;
