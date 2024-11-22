import SearchBar from "./components/SearchBar";
import "./App.css";
import { useEffect } from "react";
import { getAllBooks } from "./components/data/getAllBooks";

function App() {
  useEffect(() => {
    const getData = async () => {
      const books = await getAllBooks();
      console.info(books);
    };

    getData();
  }, []);
  return (
    <div>
      <SearchBar />
    </div>
  );
}
export default App;
