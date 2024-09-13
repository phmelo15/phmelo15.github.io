import React, { ChangeEvent } from "react";
import { styles } from "./styles";

interface ICheckBox {
  text?: string;
  state?: boolean;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({ text, state, onchange }: ICheckBox) {
  return (
    <div className={styles.Container}>
      <input
        type="checkbox"
        checked={state}
        onChange={onchange}
        style={{ width: 18, height: 18 }}
      ></input>
      <text className={styles.TextCheck}>{text}</text>
    </div>
  );
}
