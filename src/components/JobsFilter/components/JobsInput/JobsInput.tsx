import React from "react";
import { styles } from "./styles";
// import Entypo from 'react-native-vector-icons/'
// import { GoArrowLeft } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

interface IJobsInput {
  placeholder?: string;
}

export default function JobsInput({ placeholder }: IJobsInput) {
  return (
    <div className={styles.Container}>
      <input placeholder={placeholder} className={styles.input} />
      <HiMiniMagnifyingGlass />
    </div>
  );
}
