interface ITwoRowLabelProps {
  header: string;
  text: string;
}

export const TwoRowLabel = ({ header, text }: ITwoRowLabelProps) => {
  return (
    <div>
      <p className="text-gray-60 inline-block font-normal">{header}</p>
      <p className="text-gray-90 font-medium">{text}</p>
    </div>
  );
};
