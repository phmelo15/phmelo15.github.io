import ButtonDefault from "@/components/ButtonDefault/ButtonDefault";
import { styles } from "./styles";

export default function FindProfessionals() {
  return (
    <div className={styles.Container}>
      <h3 className={styles.HashFind}>#Encontre profissionais</h3>
      <h2 className={styles.HashChange}>
        Um passo fácil para mudar{" "}
        <span className={styles.SpanFuture}>seu futuro.</span>
      </h2>
      <p className={styles.Subtitle}>
        Explore milhares de oportunidades de emprego com todas as informações
        que você precisa e gerenciando todos os seus formulários de emprego do
        início ao fim.
      </p>
      <ButtonDefault
        title="Saber mais"
        route="/Home"
        backgroundColor="text-white"
        width="w-[140px]"
      />
    </div>
  );
}
