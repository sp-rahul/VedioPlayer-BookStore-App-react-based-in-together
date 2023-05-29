import React from "react";
import CartCard from "./CartCard";

export default function Cart({ setCartItem, cartItem }) {
  const cartData = Object.keys(cartItem).map((key) => {
    return {
      title: key,
      count: cartItem[key],
    };
  });
  return (
    <div>
      {cartData.map((cart) => (
        <CartCard setCartItem={setCartItem} cartItem={cartItem} data={cart} />
      ))}
    </div>
  );
}
