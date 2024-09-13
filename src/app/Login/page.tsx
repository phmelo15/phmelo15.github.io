"use client";

import AuthInput from "@/components/AuthInput/AuthInput";
import ButtonDefault from "@/components/ButtonDefault/ButtonDefault";
import CheckBox from "@/components/CheckBox/CheckBox";
import DivisorComponent from "@/components/DivisorComponent/DivisorComponent";
import EasyLoginButton from "@/components/EasyLoginbutton/EasyLoginButton";
import { Images } from "@/constants/Images";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { styles } from "./styles";

export default function Login() {
  const [check, setCheck] = useState<boolean>(false);
  const [showEye, setShowEye] = useState<boolean>(false);
  const router = useRouter();

  const changeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    ``;
    setCheck(event.target.checked);
  };

  const handleChangeEye = () => {
    setShowEye(!showEye);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1 className={styles.Title}>
          Bem-vindo a Find<span className="text-blueLogo">Freela</span>
        </h1>
        <p className={styles.Subtitle}>
          Continue com o google ou entre com sua conta FindFreela.
        </p>
        <div className={styles.SpaceButton}>
          <EasyLoginButton title="Login com Linkedin" icon={Images.Linkedin} />
        </div>
        <EasyLoginButton title="Login com Google" icon={Images.Google} />
        <DivisorComponent text="Ou entre com sua conta FindFreela" />
        <AuthInput placeholder="Usuario" />
        <AuthInput
          placeholder="Senha"
          security
          showEye={showEye}
          changeEye={handleChangeEye}
        />
        <div className={styles.ContainerCheck}>
          <CheckBox
            text="Lembre de mim"
            onchange={changeCheckBox}
            state={check}
          />
          <button onClick={() => router.push("/RecoveryPassword")}>
            <text className={styles.TextRecover}>Recuperar senha?</text>
          </button>
        </div>
        <ButtonDefault
          marginBottom="mb-8"
          marginTop="mt-8"
          title="Entrar"
          route="/Home"
        />
        <p className={styles.TextSubscribe}>
          Junte-se a nós?{" "}
          <button
            onClick={() => {
              router.push("/Register");
            }}
          >
            <text className={styles.SpanSubscribe}>
              Crie uma conta é grátis
            </text>
          </button>
        </p>
        <p className={styles.TextFooter}>
          Ao continuar, você concorda em encontrar os{" "}
          <strong>Termos de Uso</strong> e confirma que leu a{" "}
          <strong>Política de Privacidade</strong>
        </p>
      </div>
    </div>
  );
}
