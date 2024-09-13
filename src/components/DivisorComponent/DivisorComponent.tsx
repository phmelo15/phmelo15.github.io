import React from "react";
import { styles } from "./styles";

interface IDivisorComponent {
  text?: string;
}

export default function DivisorComponent({ text }: IDivisorComponent) {
  return (
    <div className={styles.Container}>
      <div className={styles.Content} />
      <text className={styles.TextDivisor}>{text}</text>
      <div className={styles.Divisor} />
    </div>
  );
}
