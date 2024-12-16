import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const button = cva("font-medium flex items-center", {
  variants: {
    intent: {
      filled: ["bg-primary-90 text-default-white hover:bg-primary-60"],
      outlined: ["bg-default-white text-primary-90 border border-gray-30"],
      danger: ["bg-default-allert text-default-white"],
      disabled: ["bg-gray-30 text-default-white"],
      link: ["text-primary-90 hover:underline decoration-primary-90"],
    },
    size: {
      large: ["px-8 text-xl h-14"],
      medium: ["px-7 h-12"],
      small: ["px-7 text-sm h-10"],
    },
  },
  defaultVariants: {
    intent: "filled",
    size: "medium",
  },
});

type IButtonType = "button" | "submit" | undefined;

interface IButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  type?: IButtonType;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, intent, size, disabled = false, ...rest }, ref) => (
    <button
      ref={ref}
      className={`${button({ className, intent, size })}`}
      disabled={disabled}
      {...rest}
    />
  )
);
