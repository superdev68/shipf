import { ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

const FallbackHoc = ({ children, fallback = <>Loading...</> }: Props) => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default FallbackHoc;
