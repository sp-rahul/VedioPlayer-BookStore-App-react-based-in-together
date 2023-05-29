import React from "react";
import NotFound from "../@common/NotFound";
import Music from "../pages/music";
import Home from "../pages/home";
import Book from "../pages/book";

export default function Router(props) {
  const getRouter = (pathname) => {
    switch (pathname) {
      case "/book":
        return <Book />;
      case "/music":
        return <Music />;

      case "/":
        return <Home />;
      default:
        return <NotFound />;
    }
  };
  return getRouter(props.pathname);
}
