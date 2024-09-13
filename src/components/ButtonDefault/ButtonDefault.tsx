"use client";

import { Images } from "@/constants/Images";
import Image from "next/image";
import { styles } from "./styles";
import { useRouter } from "next/navigation";

interface IButtonDefault {
  marginTop?: string;
  title?: string;
  marginBottom?: string;
  route: string;
  backgroundColor?: string;
  width?: string;
  type?: "default" | "outlined";
  icon?: boolean;
}

export default function ButtonDefault({
  marginTop,
  title,
  marginBottom,
  route,
  width = "w-full",
  icon,
  type = "default",
}: IButtonDefault) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className={`${width} h-10 rounded ${
        type === "default" ? "bg-blue-blueFive" : "bg-white"
      } ${marginTop} ${marginBottom} ${icon && styles.IconStyle}`}
    >
      <p
        className={`text-sm font-medium ${
          type === "outlined" ? "text-blue-blueFive" : "text-white"
        }`}
      >
        {title}
      </p>
      {icon && (
        <Image
          src={Images.arrowRight}
          alt="my icon"
          className={styles.ArrowIcon}
        />
      )}
    </button>
  );
}
