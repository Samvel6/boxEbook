import Volume from "./components/Volume";
import "./App.css";
import { useEffect, useState } from "react";
import { getAllBooks } from "./components/data/getAllBooks";

interface BookData {
  has_fulltext?: string;
  cover_edition_key: string;
  title: string;
  name: string;
}

export default function App() {
  const [books, setBooks] = useState([] as BookData[]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllBooks();

      setBooks(data);
    };

    getData();
  }, []);
  return (
    <>
      {books.map((book) => (
        <Volume
          key={book.title}
          title={book.title}
          cover_edition_key={book.cover_edition_key}
          name={book.name}
        />
      ))}
    </>
  );
}
