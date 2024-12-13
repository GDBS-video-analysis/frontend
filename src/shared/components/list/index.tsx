import { ReactNode } from "react";

interface IListProps {
  header: string;
  options: string[];
  className?: string;
}

export const List = ({ options, header, className }: IListProps): ReactNode => {
  return (
    <div className={`text-xl text-gray-90 ${className}`}>
      {header}:
      <ul className="list-decimal ms-4 text-sm mt-2">
        {options.map((option) => (
          <li key={null}>{option}</li>
        ))}
      </ul>
    </div>
  );
};
