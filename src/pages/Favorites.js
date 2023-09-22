import { useState, useEffect } from "react";
import Header from "../Header";
import GameCard from "../GameCard";

const Favorites = ({ favoriteArray, favorite }) => {
  const [favGames, setFavGames] = useState([]);
  useEffect(() => {
    setFavGames(favoriteArray);
  }, [favoriteArray]);
  console.log(favGames);
  return (
    <div className="app">
      <div>
        <Header pagename={"Favorites"} />
      </div>
      <div className="container">
        {favGames?.length > 0 ? (
          <div className="container">
            {favGames.map((game) => (
              <GameCard
                game={game}
                faved={true}
                onFavoriteClick={(game) => {
                  favorite(game);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Games found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
