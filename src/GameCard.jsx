import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const GameCard = ({ game, onFavoriteClick, faved}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(faved);
  }, [faved]);
  const handleClick = () => {
    setIsFavorited(!isFavorited);
    onFavoriteClick(game);
  };

  return (
    <div className="movie">
      <div>
        <p className="favorite" onClick={handleClick}>
          {isFavorited ? <MdFavorite /> : <MdFavoriteBorder />}
        </p>
      </div>
      <div>
        <img
          src={
            game.background_image
              ? game.background_image
              : "https://via.placeholder.com/400"
          }
          alt={game.name}
        />
      </div>
      <div>
        {game.parent_platforms && game.parent_platforms.length > 0 ? (
          <span>
            {game.parent_platforms.map((platform, index) => (
              <span key={platform.platform.id}>
                {platform.platform.name}
                {index !== game.parent_platforms.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        ) : (
          <span>No platforms available</span>
        )}
        <h3>{game.name}</h3>
      </div>
    </div>
  );
};

export default GameCard;