import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { styles } from "./styles";

interface IAuthInput {
  placeholder?: string;
  security?: boolean;
  showEye?: boolean;
  changeEye?: () => void;
}

export default function AuthInput({
  placeholder,
  security,
  showEye,
  changeEye,
}: IAuthInput) {
  return (
    <div className={security ? styles.ContainerSec : styles.ContainerNoSec}>
      <input
        className={styles.AuthInput}
        placeholder={placeholder}
        type={security ? (showEye ? "text" : "password") : "text"}
      />
      {security && (
        <button onClick={changeEye}>
          {showEye ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      )}
    </div>
  );
}
