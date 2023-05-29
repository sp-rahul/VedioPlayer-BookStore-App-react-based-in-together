import React from "react";

export default function CartCard({ data, cartItem, setCartItem }) {
  const handleAddCart = (title) => {
    const { [title]: item } = cartItem;
    setCartItem({ ...cartItem, [title]: item ? item + 1 : 1 });
  };
  const handleDeleteCart = (title) => {
    const { [title]: item } = cartItem;
    if (item > 1) {
      setCartItem({ ...cartItem, [title]: item && item - 1 });
    } else {
      const { [title]: item, ...others } = cartItem;
      setCartItem({ ...others });
    }
  };
  return (
    <div className="cart-card">
      {" "}
      <p class="truncate">{data?.title}</p>
      <p>{data?.count}</p>
      <p>
        <button onClick={() => handleAddCart(data?.title)}>+</button>
        <button onClick={() => handleDeleteCart(data?.title)}>-</button>
      </p>
    </div>
  );
}
