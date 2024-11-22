import debounce from "debounce";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
interface Book {
  id: number;
  has_fulltext?: string;
  cover_edition_key: string;
  title: string;
  name: string;
}
const SearchBar = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTitle, setSearchTitle] = useState("");
  const fetchBooks = async (title: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/books?title=${title}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error("Erreur lors du chargement des items:", error);
    }
  };
  const debouncedFetchBooks = debounce((title: string) => {
    fetchBooks(title);
  }, 500);
  useEffect(() => {
    if (searchTitle) {
      debouncedFetchBooks(searchTitle);
    } else {
      setFilteredBooks([]);
    }
  }, [searchTitle, debouncedFetchBooks]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };
  return (
    <div className="search-bar-container">
      <div className="input-container">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Rechercher par titre"
          className="search-input"
          value={searchTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="results-list">
          {filteredBooks.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="link-book">
              <strong>{book.title}</strong>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
