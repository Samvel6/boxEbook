import "./App.css";
import { Outlet } from "react-router-dom";


export default function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const books = await getAllBooks();
  //     console.info(books);
  //   };

  //   getData();
  // }, []);
  return <Outlet />;
}
