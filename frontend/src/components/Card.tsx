import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
}
const Card = ({ children, text }: Props) => {
  return (
    <div className="rounded-xl bg-blue-600 p-6 m-6 text-start text-white flex flex-row items-start justify-between ">
      <p>{text}</p>
      {children}
    </div>
  );
};

export default Card;
