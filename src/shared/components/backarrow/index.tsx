import arrowLeft from "@shared/assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

interface IBackarrowProps {
  to: string;
  label: string;
}

export const Backarrow = ({ to, label }: IBackarrowProps) => {
  const nav = useNavigate();

  return (
    <div>
      <section
        className="flex gap-2 cursor-pointer font-medium"
        onClick={() => nav(to)}
      >
        <img src={arrowLeft} /> {label}
      </section>{" "}
    </div>
  );
};
