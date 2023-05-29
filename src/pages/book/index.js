import React from "react";
import "./style.css";
// import Logo from ".bookimage.png";
import Author from "../../components/book/Author";
import Books from "../../components/book/Books";
import Cart from "../../components/book/Cart";

export function removeSpecialJoin(str) {
  return str
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("_");
}

export default function Book() {
  const [allBooks, setAllBooks] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const [cartItem, setCartItem] = React.useState({});
  const [selectedAuthor, setSelectedAuthor] = React.useState({});

  React.useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((res) => {
        setAllBooks(res.results);
        setBooks(res.results);
      });
  }, []);

  React.useEffect(() => {
    let filter_book = [];
    const keys = Object.keys(selectedAuthor);
    if (keys.length) {
      allBooks.forEach((book) => {
        book.authors.every((author) => {
          if (keys.includes(removeSpecialJoin(author.name))) {
            filter_book.push(book);
            return true;
          } else {
            return false;
          }
        });
      });
      setBooks(filter_book);
    } else {
      setBooks(allBooks);
    }
  }, [selectedAuthor]);

  return (
    <div>
      <div className="topnav">
        {/* <img
          src={Logo}
          style={{ height: "50px", width: "100px" }}
          alt="React Image"
        /> */}
      </div>
      <div className="container">
        <Author
          data={allBooks}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
        <Books data={books} cartItem={cartItem} setCartItem={setCartItem} />
        <Cart cartItem={cartItem} setCartItem={setCartItem} />
      </div>
    </div>
  );
}
