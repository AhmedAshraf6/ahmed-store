import React, { useEffect } from 'react';
import BigCart from '../components/cart/BigCart';
import LandingPageShared from '../components/shared-component/LandingPageShared';
import { useGlobalContext } from '../contexts/ContextApi';
const Cart = () => {
  const { closeCartOverlay } = useGlobalContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCartOverlay();
  }, []);
  return (
    <div className='cart-page'>
      <LandingPageShared content={{ h1: 'السلة', p: 'طازجة وعضوية' }} />
      <BigCart />
    </div>
  );
};

export default Cart;
