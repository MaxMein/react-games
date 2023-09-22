import Header from "../Header";
import GameCard from "../GameCard";

const Favorites = ({ favoriteArray, favorite }) => {
  return (
    <div className="app">
      <div>
        <Header pagename={"Favorites"} />
      </div>
      <div className="container">
        {favoriteArray?.length > 0 ? (
          <div className="container">
            {favoriteArray.map((game) => (
              <GameCard game={game} faved={true} onFavoriteClick={favorite} />
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
