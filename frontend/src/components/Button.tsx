import { ReactNode } from "react";

interface Props {
  color?: string;
  border?: boolean;
  children: ReactNode;
}

const Button = ({ color = " ", border = false, children }: Props) => {
  return (
    <button
      className={`rounded-full ${color === "" ? "bg-none" : "bg-" + color} ${
        border ? "border-solid border-2 border-" + color : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
