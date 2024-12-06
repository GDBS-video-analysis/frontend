import user from "@shared/assets/icons/user.svg";

interface IAvatarProps {
  src?: string;
  width?: number;
  height?: number;
}

export const Avatar = ({ src, width, height }: IAvatarProps) => {
  return (
    <div
      className="flex justify-center items-center w-[48px] h-[48px] bg-gray-10 rounded-full bg-cover"
      style={{ backgroundImage: `url(${src})`, width: width, height: height }}
    >
      {!src && <img src={user} />}
    </div>
  );
};
