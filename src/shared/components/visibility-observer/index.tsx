import { useVisibility } from "@shared/components/visibility-observer/hooks";
import { PropsWithChildren } from "react";

interface VisibilityObserverProps extends PropsWithChildren {
  handleOnChangeVisibility(isVisible: boolean): void;
}

export const VisibilityObserver = ({
  handleOnChangeVisibility,
  ...rest
}: VisibilityObserverProps) => {
  const { ref } = useVisibility<HTMLSelectElement>(handleOnChangeVisibility);

  return <section ref={ref} {...rest} />;
};
