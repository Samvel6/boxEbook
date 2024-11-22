import "./App.css";
import Donatepage from "./pages/Donatepage";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Donatepage />
      <Outlet />
    </>
  );
}
