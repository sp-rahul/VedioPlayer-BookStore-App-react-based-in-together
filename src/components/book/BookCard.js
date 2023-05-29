import React from "react";
import { removeSpecialJoin } from "../../pages/book";
import Cart from "./Cart";

export default function BookCard({ data, setCartItem, cartItem }) {
  const handleAddCart = (title) => {
    const { [title]: item } = cartItem;
    setCartItem({ ...cartItem, [title]: item ? item + 1 : 1 });
  };
  return (
    <div className="bookCard">
      {" "}
      <div class="book-card-img">
        <img class="img" src={data?.formats["image/jpeg"]} />
      </div>
      <div class="book-card-body">
        <p>{data.title}</p>
        <p>{data.authors[0].name}</p>
        <p>Price : 30$</p>
        <button onClick={() => handleAddCart(removeSpecialJoin(data?.title))}>
          {" "}
          add to card
        </button>
      </div>
    </div>
  );
}
