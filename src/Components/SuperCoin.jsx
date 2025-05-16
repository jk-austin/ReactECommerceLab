import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SuperCoinsTracker = () => {

    const [superCoins, setSuperCoins] = useState(0);

    const cartItems = useSelector(state => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
        setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
        setSuperCoins(20);
        } else if (totalAmount >= 300 && totalAmount < 400) {
        setSuperCoins(30);
        } else if (totalAmount >= 400 && totalAmount < 500) {
        setSuperCoins(40);
        } else if (totalAmount >= 500) {
        setSuperCoins(50);
        } else {
        setSuperCoins(0);
        }
    }, [totalAmount]);

    return (
        <div className="super-coins-tracker">
          <h3>Total: ${totalAmount}</h3>
          <h4>SuperCoins Earned: {superCoins}</h4>
        </div>
      );
};

  export default SuperCoinsTracker;