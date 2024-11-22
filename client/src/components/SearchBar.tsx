import debounce from "debounce"; // Importation de la fonction debounce
import { useEffect, useState } from "react";

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

  // Fonction de récupération des livres
  const fetchBooks = async (title: string) => {
    try {
      console.info("searchTitle =>", title);
      const response = await fetch(`/books?title=${title}`);
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error("Erreur lors du chargement des items:", error);
    }
  };

  // Débounce de la fonction fetchBooks
  const debouncedFetchBooks = debounce((title: string) => {
    fetchBooks(title);
  }, 500); // Attendre 500ms après la dernière saisie avant d'effectuer la recherche

  // Quand la valeur de searchTitle change, on appelle debouncedFetchBooks
  useEffect(() => {
    if (searchTitle) {
      debouncedFetchBooks(searchTitle);
    } else {
      setFilteredBooks([]); // Réinitialiser les résultats si la recherche est vide
    }
  }, [searchTitle, debouncedFetchBooks]);

  // Mise à jour de la valeur de l'input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div>
      <div className="search-bar-container">
        🔍
        <input
          type="text"
          placeholder="Rechercher par titre / auteur"
          className="search-input"
          value={searchTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <ul className="results-list">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
