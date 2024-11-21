import "./App.css";
import { Outlet } from "react-router-dom";
import Volume from "./components/Volume";
import { useEffect, useState } from "react";
import { getAllBooks } from "./components/data/getAllBooks";

interface BookData {
  has_fulltext: string;
  cover: string;
  title: string;
  author: string;
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
      <Outlet />
      {books.map((book) => (
        <Volume
          key={book.title}
          title={book.title}
          cover={book.cover}
          author={book.author}
          has_fulltext={book.has_fulltext}
        />
      ))}
    </>
  );
}
