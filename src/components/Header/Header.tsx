import ButtonDefault from "../ButtonDefault/ButtonDefault";
import ButtonModalHeader from "./components/ButtonModalHeader/ButtonModalHeader";
import NavButtons from "./components/NavButtons/NavButtons";
import { styles } from "./styles";

export default function Header() {
  return (
    <nav className={styles.Nav}>
      <ButtonModalHeader />
      <p className={styles.LogoText}>
        Job<span className={styles.BlueLogo}>Find</span>
      </p>
      <div className={styles.NavButtonsStyle}>
        <NavButtons />
      </div>
      <div className={styles.NavButtonsStyle}>
        <ButtonDefault
          title="Login"
          route="/Home"
          backgroundColor="text-white"
          width="w-[120px]"
          type="outlined"
        />
        <ButtonDefault
          title="Cadastrar"
          route="/Home"
          backgroundColor="text-white"
          width="w-[120px]"
          type="default"
        />
      </div>
    </nav>
  );
}
