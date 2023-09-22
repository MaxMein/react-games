import React from "react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdGames } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Sidebar = ({ page }) => {
  const [activePage, setActivePage] = useState();

  const handleSidebarClick = (page) => {
    setActivePage(page);
  };
  page(activePage);
  return (
    <ul className="sidebar">
      <li>
        <button onClick={() => handleSidebarClick("home")}>
          <AiFillHome />
          Home
        </button>
      </li>
      <li>
        <button onClick={() => handleSidebarClick("games")}>
          <MdGames />
          Games
        </button>
      </li>
      <li>
        <button onClick={() => handleSidebarClick("favorites")}>
          <MdFavorite />
          Favorites
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
