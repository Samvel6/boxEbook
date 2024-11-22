import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
