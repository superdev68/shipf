import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const ProtectedRouteHoc = ({ children }: Props) => {
  const location = useLocation();
  const accessToken = true;
  const renderPage = () => children;
  const navigateLogin = () => (
    <Navigate to='/login' state={{ from: location }} replace />
  );

  return accessToken ? renderPage() : navigateLogin();
};

export default ProtectedRouteHoc;
