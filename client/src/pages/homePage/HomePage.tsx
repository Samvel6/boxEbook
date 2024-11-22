import "./HomePage.css";
import { Link, useLoaderData } from "react-router-dom";

interface Book {
  id: number;
  title: string;
}

function Home() {
  const books = useLoaderData() as Book[];

  return (
    <div className="home">
      <h2>boite a livre</h2>
      <div className="boite-a-livre">
        <div className="boite-a-livre-haut">
          <div className="boite-a-livre-gauche">
            <Link to={`/books/${books[2].id}`} className="livre-1">
              <h3>{books[2].title}</h3>
            </Link>

            <Link to={`/books/${books[3].id}`} className="livre-2">
              <h3>{books[3].title}</h3>
            </Link>

            <Link to={`/books/${books[5].id}`} className="livre-3">
              <h3>{books[5].title}</h3>
            </Link>

            <Link to={`/books/${books[4].id}`} className="livre-4">
              <h3>{books[4].title}</h3>
            </Link>
          </div>
          <div className="boite-a-livre-droite">
            <Link to={`/books/${books[2].id}`} className="livre-1">
              <h3>{books[2].title}</h3>
            </Link>

            <Link to={`/books/${books[3].id}`} className="livre-2">
              <h3>{books[3].title}</h3>
            </Link>

            <Link to={`/books/${books[5].id}`} className="livre-3">
              <h3>{books[5].title}</h3>
            </Link>

            <Link to={`/books/${books[4].id}`} className="livre-4">
              <h3>{books[4].title}</h3>
            </Link>
          </div>
        </div>

        <div className="boite-a-livre-bas">
          <div className="boite-a-livre-gauche">
            <Link to={`/books/${books[2].id}`} className="livre-1">
              <h3>{books[2].title}</h3>
            </Link>

            <Link to={`/books/${books[3].id}`} className="livre-2">
              <h3>{books[3].title}</h3>
            </Link>

            <Link to={`/books/${books[5].id}`} className="livre-3">
              <h3>{books[5].title}</h3>
            </Link>

            <Link to={`/books/${books[4].id}`} className="livre-4">
              <h3>{books[4].title}</h3>
            </Link>
          </div>
          <div className="boite-a-livre-droite">
            <Link to={`/books/${books[2].id}`} className="livre-1">
              <h3>{books[2].title}</h3>
            </Link>

            <Link to={`/books/${books[3].id}`} className="livre-2">
              <h3>{books[3].title}</h3>
            </Link>

            <Link to={`/books/${books[5].id}`} className="livre-3">
              <h3>{books[5].title}</h3>
            </Link>

            <Link to={`/books/${books[4].id}`} className="livre-4">
              <h3>{books[4].title}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
