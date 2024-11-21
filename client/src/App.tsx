import Book from "./pages/Book";
import "./App.css";
import { useEffect } from "react";
import { getAllBooks } from "./components/data/getAllBooks";

export default function App() {
  useEffect(() => {
    const getData = async () => {
      const books = await getAllBooks();
      console.info(books);
    };

    getData();
  }, []);
  return (
    <>
      <Book />
    </>
  );
}
