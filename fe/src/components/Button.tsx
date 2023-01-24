import { ReactNode } from "react";

type Button = {
  icon: ReactNode;
  onClick: () => void;
  isActive: boolean;
  type?: string;
};

export default function Button({ icon, onClick, isActive, type }: Button) {
  return (
    <button
      className={`Button ${isActive ? "active" : "disabled"}`}
      id={type ? type : ""}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
