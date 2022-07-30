import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared-component/Footer';
import ShortCart from './shop/ShortCart';
import { useGlobalContext } from '../contexts/ContextApi';
const ShareLayout = () => {
  const { isShortCartOpen } = useGlobalContext();
  return (
    <>
      {isShortCartOpen && <ShortCart />}
      <Outlet />
      <Footer />
    </>
  );
};

export default ShareLayout;
