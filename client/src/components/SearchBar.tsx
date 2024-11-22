import { useEffect, useState } from "react";
interface Item {
  id: number;
  title: string;
  author: string;
}

const SearchBar = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Erreur lors du chargement des items:", error);
      }
    };
    fetchData();
  }, []);

  // Filtrer les items en fonction du searchQuery
  useEffect(() => {
    let result = items;
    if (searchQuery) {
      const [titleQuery, authorQuery] = searchQuery.split(":");

      if (titleQuery) {
        result = result.filter((item) =>
          item.title.toLowerCase().includes(titleQuery.trim().toLowerCase()),
        );
      }

      if (authorQuery) {
        result = result.filter((item) =>
          item.author.toLowerCase().includes(authorQuery.trim().toLowerCase()),
        );
      }
    }
    setFilteredItems(result);
  }, [searchQuery, items]);

  return (
    <div className="search-bar-container">
      🔍
      <input
        type="text"
        placeholder="Rechercher par titre / auteur"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="results-list">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> par {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
