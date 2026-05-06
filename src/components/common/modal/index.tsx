import React, { useRef, useState } from "react";
import styles from "./Modal.module.scss";

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

const Modal = ({ children }: { children: React.ReactNode }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>("bottom-middle");

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

  return (
    <div
      id="mypopover"
      popover="auto"
      ref={popoverRef}
      className={styles.popover}
    >
      <div className={styles.popover_content}>{children}</div>
    </div>
  );
};

export default Modal;
