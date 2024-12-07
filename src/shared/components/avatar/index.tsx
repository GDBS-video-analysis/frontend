import user from "@shared/assets/icons/user.svg";

type EAvatarForm = "square" | "circle" | undefined;

interface IAvatarProps {
  src?: string;
  width?: number;
  height?: number;
  form?: EAvatarForm;
}

export const Avatar = ({
  src,
  width,
  height,
  form = "circle",
}: IAvatarProps) => {
  return (
    <div
      className={`flex justify-center items-center w-[48px] h-[48px] bg-gray-10 ${
        form === "circle" && "rounded-full"
      } bg-cover`}
      style={{ backgroundImage: `url(${src})`, width: width, height: height }}
    >
      {!src && <img src={user} className="w-1/2 h-1/2" />}
    </div>
  );
};
