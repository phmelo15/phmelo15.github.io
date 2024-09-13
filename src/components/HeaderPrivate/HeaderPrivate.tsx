import { Colors } from "@/constants/Colors";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotifications, IoMdChatbubbles } from "react-icons/io";
import ButtonModalHeader from "../Header/components/ButtonModalHeader/ButtonModalHeader";
import NavButtons from "./components/NavButtons/NavButtons";
import { styles } from "./styles";

export default function HeaderPrivate() {
  return (
    <nav className={styles.Nav}>
      <ButtonModalHeader isAuth />
      <p className={styles.LogoText}>
        Find<span className={styles.BlueLogo}>Freela</span>
      </p>
      <div className={styles.NavButtonsStyle}>
        <NavButtons />
      </div>
      <div className={styles.ContainerSideOptions}>
        <button>
          <IoIosNotifications size={30} color={Colors.secundary.grayFive} />
        </button>
        <button>
          <IoMdChatbubbles size={28} color={Colors.secundary.grayFive} />
        </button>
        <button>
          <FaCircleUser
            size={46}
            color={Colors.secundary.grayFive}
            className="ml-[50px]"
          />
        </button>
      </div>
    </nav>
  );
}
