import Header from "@/components/Header/Header";
import FindProfessionals from "./components/FindProfessionals/FindProfessionals";
import ProcessContainer from "./components/ProcessContainer/ProcessContainer";
import ShowCase from "./components/ShowCase/ShowCase";
import { styles } from "./styles";

export default function page() {
  return (
    <>
      <Header />
      <div className={styles.ContainerHome}>
        <ShowCase />
        <FindProfessionals />
        <ProcessContainer />
      </div>
    </>
  );
}
