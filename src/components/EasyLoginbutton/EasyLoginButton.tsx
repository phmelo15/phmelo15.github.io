import Image from "next/image";
import { styles } from "./styles";

interface IEasyLoginButton {
  title?: string;
  icon: string;
}

export default function EasyLoginButton({ title, icon }: IEasyLoginButton) {
  return (
    <button className={styles.Button}>
      <Image src={icon} alt="my icon" className={styles.SocialIcon} />
      <text className={styles.TextButton}>{title}</text>
    </button>
  );
}
