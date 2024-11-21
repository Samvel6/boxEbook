import "./App.css";
import { Outlet } from "react-router-dom";
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
  return <Outlet />;
}
