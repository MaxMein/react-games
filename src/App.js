import "./App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Favorites from "./pages/Favorites";
import { GiHamburgerMenu } from "react-icons/gi";

//Sites: 42699

const App = () => {
  const [dataFromPage, setDataFromPage] = useState("home");
  const [sidebar, setSidebar] = useState(true);
  const handlePageData = (data) => {
    setDataFromPage(data);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="app">
      <i onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </i>
      {sidebar ? <Sidebar page={handlePageData} /> : <h1>Text</h1>}
      <div className="placeholder">
        {
          {
            home: <Home />,
            games: <Games />,
            favorites: <Favorites />,
          }[dataFromPage]
        }
      </div>
    </div>
  );
};

export default App;
