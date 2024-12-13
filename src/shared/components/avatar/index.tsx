import user from "@shared/assets/icons/user.svg";
import { FILES_API } from "@shared/constants/default-values";

type EAvatarForm = "square" | "circle" | undefined;

interface IAvatarProps {
  avatarId?: number;
  width?: number;
  height?: number;
  form?: EAvatarForm;
}

export const Avatar = ({
  avatarId,
  width,
  height,
  form = "circle",
}: IAvatarProps) => {
  return (
    <div
      className={`flex justify-center items-center w-[48px] h-[48px] bg-gray-10 ${
        form === "circle" && "rounded-full"
      } bg-cover`}
      style={{
        backgroundImage: `url(${FILES_API}/${avatarId})`,
        width: width,
        height: height,
      }}
    >
      {!avatarId && <img src={user} className="w-1/2 h-1/2" />}
    </div>
  );
};
