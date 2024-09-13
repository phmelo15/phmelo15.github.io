import { styles } from "./styles";

interface ISignatureCard {
  title: string;
  description: string;
  price: string;
}

export default function SignatureCard({
  title,
  description,
  price,
}: ISignatureCard) {
  return (
    <div className={styles.Container}>
      <p className={styles.Title}>{title}</p>
      <p className={styles.Subtitle}>{description}</p>
      <div className={styles.ContainerPrice}>
        <p className={styles.Price}>
          R${price}
          <span className="text-secundary-grayFour text-[11px] font-thin">
            /Mês
          </span>
        </p>
        <button className={styles.button}>
          <p className={styles.TextButton}>Ver detalhes</p>
        </button>
      </div>
    </div>
  );
}
