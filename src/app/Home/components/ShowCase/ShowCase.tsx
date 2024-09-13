import { styles } from "./styles";

export default function ShowCase() {
  return (
    <>
      <div className={styles.Container}>
        <h3 className={styles.HashFreela}>
          #Freelancers especializados para seu projeto
        </h3>
      </div>
      <h1 className={styles.Title}>
        Encontre <span className={styles.SpanFreela}>freelancers</span> para da
        colocar seu projeto em prática
      </h1>
      <p className={styles.Subtitle}>
        Explore milhares de oportunidades de emprego com todas as informações
        que você precisa e gerencie todas as suas candidaturas de emprego do
        início ao fim.
      </p>
    </>
  );
}
