import { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import GameCard from "../GameCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";

const Games = ({ favorite }) => {
  const [Games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchGames = async (title) => {
    setIsLoading(true);
    let url =
      "https://api.rawg.io/api/games?key=117fa131b9db45128c7d0af9c82151ae&search_precise=true&page_size=24&page=" +
      currentPage;
    if (title) {
      url += `&search=${title}`;
    }
    console.log(currentPage);
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setGames(data.results);
    setNextPageUrl(data.next);
  };
  useEffect(() => {
    searchGames(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  useEffect(() => {
    setIsLoading(Games?.length <= 0);
  }, [Games]);

  return (
    <div className="app">
      <Header pagename={"Games"} />
      <div className="search">
        <input
          placeholder="Search for Games..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchGames(searchTerm);
              setCurrentPage(1);
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchGames(searchTerm);
            setCurrentPage(1);
          }}
        />
      </div>
      {isLoading ? (
        <div className="loading-circle"></div>
      ) : (
        <div className="container">
          {Games.map((game) => (
            <GameCard
              game={game}
              faved={false}
              onFavoriteClick={(game) => {
                favorite(game);
              }}
            />
          ))}
        </div>
      )}
      <div class="pagination">
        <button
          className="prevPage pagination-button"
          onClick={() => {
            setCurrentPage((prevPage) => prevPage - 1);
          }}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h3 className="page-indicator">{currentPage}</h3>
        <button
          className="nextPage pagination-button"
          onClick={() => {
            // Only call the searchGames() function if the nextPageUrl state variable is not empty
            if (nextPageUrl) {
              setCurrentPage((prevPage) => prevPage + 1);
            }
          }}
          disabled={!nextPageUrl}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Games;
