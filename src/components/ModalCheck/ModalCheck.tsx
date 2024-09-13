import React from "react";
import Image from "next/image";
import { Images } from "@/constants/Images";

interface IModalCheck {
  showModal: boolean;
  onClick: () => void;
}

export default function ModalCheck({ showModal, onClick }: IModalCheck) {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50 flex"
            onClick={onClick}
          />
          <div className="bg-white rounded-lg z-10 flex justify-center items-center flex-col py-20 w-[500px]">
            <Image
              src={Images.email}
              alt="my icon"
              className="mb-8 w-14 h-14"
            />
            <p className="text-center mb-3 text-xl font-semibold">
              Por favor cheque seu e-mail
            </p>
            <p className="text-center text-sm font-light px-12 text-secundary-grayFive">
              Não se preocupe! Enviamos uma recuperação de senha instruções para
              seu e-mail.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
