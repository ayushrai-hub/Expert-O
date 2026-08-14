import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalNavbar from './GlobalNavbar';

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <GlobalNavbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
