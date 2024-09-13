"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function NavButtons() {
  const router = useRouter();

  return (
    <div className="flex justify-evenly">
      <button>
        <text
          className="text-base text-secundary-grayFour font-light hover:font-normal"
          onClick={() => router.push("/FindJob")}
        >
          Encontrar trabalho
        </text>
      </button>
      <button>
        <text className="text-base text-secundary-grayFour font-light hover:font-normal">
          Meus projetos
        </text>
      </button>
    </div>
  );
}
