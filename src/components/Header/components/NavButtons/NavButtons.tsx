import React from "react";

export default function NavButtons() {
  return (
    <div className="w-[320px] flex justify-between">
      <button>
        <p className="text-base text-secundary-grayFour font-light hover:font-normal">
          Encontrar profissionais
        </p>
      </button>
      <button>
        <p className="text-base text-secundary-grayFour font-light hover:font-normal">
          Ser FindFreela
        </p>
      </button>
    </div>
  );
}
