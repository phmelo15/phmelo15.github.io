"use client";

import React, { useState } from "react";
import { styles } from "./styles";
import Image from "next/image";
import menu from "@/assets/images/icons/menu.png";
import SideMenu from "@/components/SideMenu/SideMenu";

interface IButtonModalHeader {
  isAuth?: boolean;
}

export default function ButtonModalHeader({ isAuth }: IButtonModalHeader) {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button
        className={styles.ContainerImage}
        onClick={() => setShowModal(!showModal)}
      >
        <Image src={menu} alt="my icon" className={styles.MenuIcon} />
      </button>
      <SideMenu
        sideMenu={showModal}
        onClick={() => setShowModal(!showModal)}
        isAuth={isAuth}
      />
    </>
  );
}
