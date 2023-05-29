import React from "react";
import { path } from "../routes/path";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <ul className="LI">
          {path.map((pth) => {
            return (
              <li>
                <a href={pth.path}>{pth.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
