import React from "react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdGames } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ page }) => {
  const [activePage, setActivePage] = useState();
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const handleSidebarClick = (page) => {
    setActivePage(page);
  };
  page(activePage);
  return (
    <ul className="sidebar">
      <div className="hamDiv">
        <i onClick={toggleSidebar} className="hamIcon">
          <GiHamburgerMenu />
        </i>
      </div>
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
