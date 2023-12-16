import { lazy, Suspense } from "react";
export const LazyComponent = ({ path }: any) => {
  const Component = lazy(() => import(/* @vite-ignore */ path));
  return (props: any) => (
    <Suspense fallback={<>22</>}>
      <Component {...props} />
    </Suspense>
  );
};
