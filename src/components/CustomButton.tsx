"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles} transition-shadow duration-200 hover:shadow-lg`} // Adiciona a sombra ao passar o mouse
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6 rounded-full">
        <Image src={rightIcon} alt="" fill className="object-contain" />
      </div>
    )}
  </button>
);

export default Button;
