import { FC, memo, NamedExoticComponent, Suspense } from "react";

export const LazyLoader = <Props extends object>(
  Component: FC<Props>
): NamedExoticComponent<Props> =>
  memo((props) => (
    <Suspense fallback={<div>Loading..</div>}>
      <Component {...props} />
    </Suspense>
  ));
