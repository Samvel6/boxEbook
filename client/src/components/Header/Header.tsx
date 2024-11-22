import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">accueil</Link>
      <h1>Boite à Livre</h1>
      <Link to="/">donnation</Link>
    </div>
  );
}
