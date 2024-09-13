import ButtonDefault from "@/components/ButtonDefault/ButtonDefault";
import Image from "next/image";
import { styles } from "./styles";
import graphicIcon from "@/assets/images/icons/chart.png";
import notOne from "@/assets/images/icons/notOne.png";
import cardPlus from "@/assets/images/icons/cardPlus.png";
import notTwo from "@/assets/images/icons/notTwo.png";
import clipboard from "@/assets/images/icons/clipboard.png";
import notThree from "@/assets/images/icons/notThree.png";
import schedule from "@/assets/images/icons/schedule.png";
import notFour from "@/assets/images/icons/notFour.png";
import conquest from "@/assets/images/icons/conquest.png";

export default function ProcessContainer() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerStart}>
        <Image src={graphicIcon} alt="my icon" className={styles.GraphicIcon} />
        <p className={styles.TextAdvice}>Comecando</p>
      </div>
      <h2 className={styles.FastTitle}>
        Rápido e <span className={styles.SpanBlue}>simples.</span>
      </h2>
      <p className={styles.Description}>
        FindFreela carrega o tema da tecnologia para ajudá-lo a encontrar um
        emprego com um processo fácil e rápido.
      </p>
      <div className={styles.ContainerIconProcess}>
        <div className={styles.ContainerIcon}>
          <div className="w-[150px] relative">
            <Image alt="my icon" src={notOne} className={styles.notStyle} />
            <Image src={cardPlus} alt="my icon" className={styles.IconStyle} />
          </div>
          <p className={styles.TitleIcon}>Registration</p>
          <p className={styles.TextIcon}>
            Build your reputation by creating a professional resume.
          </p>
        </div>
        <div className={styles.ContainerIcon}>
          <div className="w-[150px] relative">
            <Image alt="my icon" src={notTwo} className={styles.notStyle} />
            <Image src={clipboard} alt="my icon" className={styles.IconStyle} />
          </div>
          <p className={styles.TitleIcon}>Apply Job</p>
          <p className={styles.TextIcon}>
            Build your reputation by creating a professional resume.
          </p>
        </div>
        <div className={styles.ContainerIcon}>
          <div className="w-[150px] relative">
            <Image alt="my icon" src={notThree} className={styles.notStyle} />
            <Image src={schedule} alt="my icon" className={styles.IconStyle} />
          </div>
          <p className={styles.TitleIcon}>Interview</p>
          <p className={styles.TextIcon}>
            Build your reputation by creating a professional resume.
          </p>
        </div>
        <div className={styles.ContainerIcon}>
          <div className="w-[150px] relative">
            <Image alt="my icon" src={notFour} className={styles.notStyle} />
            <Image src={conquest} alt="my icon" className={styles.IconStyle} />
          </div>
          <p className={styles.TitleIcon}>Congratulations</p>
          <p className={styles.TextIcon}>
            Build your reputation by creating a professional resume.
          </p>
        </div>
      </div>
      <div className="self-center">
        <ButtonDefault
          title="Saber mais"
          route=""
          backgroundColor="text-white"
          width="w-[140px]"
          icon
        />
      </div>
    </div>
  );
}
