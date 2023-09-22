import "./App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Favorites from "./pages/Favorites";

//Sites: 42699

const App = () => {
  const [dataFromPage, setDataFromPage] = useState();
  const [favorites, setFavorite] = useState([]);
  const handlePageData = (data) => {
    setDataFromPage(data);
  };
  console.log(favorites);
  const handleFavorite = (data) => {
    if (favorites && Array.isArray(favorites)) {
      if (favorites.includes(data)) {
        const newFavorite = favorites.filter((i) => i !== data);
        setFavorite(newFavorite);
      } else {
        setFavorite([...favorites, data]);
      }
    } else {
      setFavorite([]);
    }
  };
  return (
    <div className="app">
      <Sidebar page={handlePageData} />
      <div className="placeholder">
        {
          {
            home: <Home />,
            games: <Games favorite={handleFavorite} />,
            favorites: (
              <Favorites favoriteArray={favorites} favorite={handleFavorite} />
            ),
          }[dataFromPage]
        }
      </div>
    </div>
  );
};

export default App;
