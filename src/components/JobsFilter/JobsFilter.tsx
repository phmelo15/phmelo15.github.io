import React from "react";
import { styles } from "./styles";
import JobsInput from "./components/JobsInput/JobsInput";

export default function JobsFilter() {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <p className={styles.Title}>Search jobs</p>
        <p className={styles.resultSearch}>550.000+ Available job vacancies</p>
      </div>
      <div className={styles.ContainerInput}>
        <JobsInput placeholder="Search jobs..." />
      </div>
    </div>
  );
}
