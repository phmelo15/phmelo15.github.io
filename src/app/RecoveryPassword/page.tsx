"use client";

import AuthInput from "@/components/AuthInput/AuthInput";
import ButtonDefault from "@/components/ButtonDefault/ButtonDefault";
import ModalCheck from "@/components/ModalCheck/ModalCheck";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { styles } from "./styles";

export default function Register() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const router = useRouter();
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <button onClick={() => router.push("/")}>
          <GoArrowLeft
            color="black"
            size={36}
            style={{
              marginBottom: 60,
            }}
          />
        </button>
        <p className={styles.TitleRecover}>Recuperar senha</p>
        <p className={styles.DescRecover}>
          Enviaremos uma nova senha para sua conta por e-mail, para ajudar a
          recuperar sua conta.
        </p>
        <AuthInput placeholder="Endereco de e-mail" />

        <ButtonDefault
          marginBottom="mb-8"
          title="Enviar"
          marginTop="mt-12"
          onClick={handleShowModal}
        />
        <p className={styles.TextRemember}>
          Se lembra da senha?{" "}
          <button onClick={() => router.push("/")}>
            <p className={styles.TextLogin}>Login</p>
          </button>
        </p>
        <p className={styles.Terms}>
          Ao continuar, você concorda em encontrar os{" "}
          <strong>Termos de Uso</strong> e confirma que leu a{" "}
          <strong>Política de Privacidade</strong>
        </p>
        <ModalCheck showModal={showModal} onClick={handleShowModal} />
      </div>
    </div>
  );
}
