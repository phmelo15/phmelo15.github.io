import { useRouter } from "next/navigation";
import { styles } from "./styles";

interface ISideMenu {
  sideMenu: boolean;
  onClick: () => void;
  isAuth?: boolean;
}

export default function SideMenu({ sideMenu, onClick, isAuth }: ISideMenu) {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.Container} ${
          sideMenu ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <ul className={styles.UlList}>
          {isAuth ? (
            <div className={styles.ContainerOptions}>
              <div className="mt-10">
                <li
                  className={styles.LiList}
                  onClick={() => router.push("/Home")}
                >
                  Meu perfil
                </li>
                <div className={styles.Divisor} />
                <li
                  className={styles.LiList}
                  onClick={() => router.push("/Home")}
                >
                  Financas
                </li>
                <div className={styles.Divisor} />
                <li
                  className={styles.LiList}
                  onClick={() => router.push("/Home")}
                >
                  Assinatura
                </li>
                <div className={styles.Divisor} />
                <li
                  className={styles.LiList}
                  onClick={() => router.push("/Home")}
                >
                  Configuracoes
                </li>
              </div>
              <li
                className={styles.LiList}
                onClick={() => router.push("/Home")}
              >
                Sair
              </li>
            </div>
          ) : (
            <>
              <li
                className={styles.LiList}
                onClick={() => router.push("/Home")}
              >
                Login
              </li>
              <div className={styles.Divisor} />
              <li
                className={styles.LiList}
                onClick={() => router.push("/Home")}
              >
                Cadastrar-se
              </li>
            </>
          )}
        </ul>
      </div>
      {sideMenu && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={onClick}
        ></div>
      )}
    </>
  );
}
