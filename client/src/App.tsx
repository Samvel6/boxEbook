import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Donatepage from "./pages/Donatepage";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Donatepage />
    </>
  );
}
