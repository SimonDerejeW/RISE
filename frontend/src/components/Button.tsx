import { ReactNode } from "react";

interface Props {
  color: string; // e.g., "blue-500", "red-500"
  border?: boolean;
  children: ReactNode;
}

const Button = ({ color, border = false, children }: Props) => {
  const tailwindStyle = `rounded-full m-3 ${
    border ? `outline-blue-600 text-blue-600 outline outline-3 px-6 py-2 hover:bg-blue-600 hover:text-white` : `bg-${color} text-white font-semibold py-2 px-6 hover:bg-blue-500`
  }`

  return <button className={tailwindStyle}>{children}</button>;
};

export default Button;
