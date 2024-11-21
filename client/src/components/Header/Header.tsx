import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">accueil</Link>
      <Link to="/">donnation</Link>
      <h1>nomdusite</h1>
    </div>
  );
}
