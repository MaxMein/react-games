import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdGames } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <Link to="./pages/Home">
          <AiFillHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/games">
          <MdGames />
          Games
        </Link>
      </li>
      <li>
        <Link to="/favorites">
          <MdFavorite />
          Favorites
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
