"use client";

import AuthInput from "@/components/AuthInput/AuthInput";
import ButtonDefault from "@/components/ButtonDefault/ButtonDefault";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { styles } from "./styles";

export default function Register() {
  const router = useRouter();
  const [showEye, setShowEye] = useState<boolean>(false);

  const handleChangeEye = () => {
    setShowEye(!showEye);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <button onClick={() => router.back()}>
          <GoArrowLeft
            color="black"
            size={36}
            style={{
              marginBottom: 60,
            }}
          />
        </button>
        <p className={styles.TextRegister}>Criar nova conta</p>
        <p className={styles.DescRegister}>
          Ajude-nos a conhecê-lo a partir das informações que você fornece para
          obter acesso gratuito ao FindFreela.
        </p>
        <AuthInput placeholder="Usuario" />
        <AuthInput placeholder="Endereco de email" />
        <AuthInput
          placeholder="Senha"
          security
          showEye={showEye}
          changeEye={handleChangeEye}
        />
        <ButtonDefault
          route=""
          marginBottom="mb-6"
          title="Enviar"
          marginTop="mt-6"
          // onClick={() => null}
        />
        <p className={styles.TextRemember}>
          Se lembra da senha?{" "}
          <button onClick={() => router.push("/")}>
            <text className={styles.TextLogin}>Login</text>
          </button>
        </p>
      </div>
    </div>
  );
}
