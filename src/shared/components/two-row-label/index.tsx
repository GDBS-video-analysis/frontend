interface ITwoRowLabelProps {
  header: string;
  text: string;
  reverse?: boolean;
}

export const TwoRowLabel = ({ header, text, reverse }: ITwoRowLabelProps) => {
  return (
    <div
      className="flex"
      style={{ flexDirection: reverse ? "column-reverse" : "column" }}
    >
      <p className="text-gray-60 inline-block font-normal">{header}</p>
      <p className="text-gray-90 font-medium">{text}</p>
    </div>
  );
};
