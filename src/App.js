import "./App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Favorites from "./pages/Favorites";

//Sites: 42699

const App = () => {
  const [dataFromPage, setDataFromPage] = useState("home");
  const handlePageData = (data) => {
    setDataFromPage(data);
  };

  return (
    <div className="app">
      <Sidebar page={handlePageData} />
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
