import React from "react";
import { styles } from "./styles";
import MiniCard from "./components/MiniCard/MiniCard";
import Image from "next/image";
import pinterest from "@/assets/images/icons/pinterest.png";

export default function SignatureCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.MainContent}>
        <div className={styles.IconContainer}>
          <Image
            alt="my icon"
            src={pinterest}
            className={styles.PinterestIcon}
          />
        </div>
        <div>
          <p className={styles.Name}>Notion</p>
          <p className={styles.Desc}>New york, USA</p>
        </div>
      </div>
      <div className={styles.ContainerMiniCard}>
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
      <p className={styles.Title}>Front-End Developer</p>
      <p className={styles.Subtitle}>
        Change the ui design into a ready made website using react.js
      </p>
      <div className={styles.ContainerPrice}>
        <p className={styles.Price}>
          R$200
          <span className="text-secundary-grayFour text-[11px] font-thin">
            /Month
          </span>
        </p>
        <button className={styles.button}>
          <p className={styles.TextButton}>Apply now</p>
        </button>
      </div>
    </div>
  );
}
