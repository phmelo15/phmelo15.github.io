import HeaderPrivate from "@/components/HeaderPrivate/HeaderPrivate";
import SignatureCard from "@/components/SignatureCard/SignatureCard";
import React from "react";
import { styles } from "./styles";

export default function page() {
  return (
    <>
      <HeaderPrivate />
      <div className={styles.ContainerHome}>
        <p className={styles.Title}>
          Bem-vindo ao FindFreela, conheça um de nossos planos:
        </p>
        <div className={styles.ContainerPlans}>
          <SignatureCard
            title="Find Essential"
            description="      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime illo veniam, delectus in accusamus natus fuga tenetur qui ipsa vel obcaecati dolorem dolor. Cum eaque quisquam maiores nemo ex?"
            price="32"
          />
          <SignatureCard
            title="Find Premium"
            description="      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime illo veniam, delectus in accusamus natus fuga tenetur qui ipsa vel obcaecati dolorem dolor. Cum eaque quisquam maiores nemo ex?"
            price="66"
          />
        </div>
      </div>
    </>
  );
}
