import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      🔍{" "}
      <input type="text" placeholder="Rechercher..." className="search-input" />
      <button type="submit" className="search-button">
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
