import "./HomePage.css";
import { useLoaderData } from "react-router-dom";

interface Book {
  id: number;
  title: string;
}

function Home() {
  const books = useLoaderData() as Book[];
  console.info(books);

  return (
    <div className="home">
      <h2>boite a livre</h2>
      <div className="boite-a-livre">
        <div className="boite-a-livre-haut">
          <div className="boite-a-livre-gauche">
            <button type="button" className="livre-1">
              <h3>{books[2].title}</h3>
            </button>

            <button type="button" className="livre-2">
              <h3>{books[3].title}</h3>
            </button>

            <button type="button" className="livre-3">
              <h3>{books[5].title}</h3>
            </button>

            <button type="button" className="livre-4">
              <h3>{books[4].title}</h3>
            </button>
          </div>
          <div className="boite-a-livre-droite">
            <button type="button" className="livre-1">
              <h3>{books[2].title}</h3>
            </button>

            <button type="button" className="livre-2">
              <h3>{books[3].title}</h3>
            </button>

            <button type="button" className="livre-3">
              <h3>{books[5].title}</h3>
            </button>

            <button type="button" className="livre-4">
              <h3>{books[4].title}</h3>
            </button>
          </div>
        </div>

        <div className="boite-a-livre-bas">
          <div className="boite-a-livre-gauche">
            <button type="button" className="livre-1">
              <h3>{books[2].title}</h3>
            </button>

            <button type="button" className="livre-2">
              <h3>{books[3].title}</h3>
            </button>

            <button type="button" className="livre-3">
              <h3>{books[5].title}</h3>
            </button>

            <button type="button" className="livre-4">
              <h3>{books[4].title}</h3>
            </button>
          </div>
          <div className="boite-a-livre-droite">
            <button type="button" className="livre-1">
              <h3>{books[2].title}</h3>
            </button>

            <button type="button" className="livre-2">
              <h3>{books[3].title}</h3>
            </button>

            <button type="button" className="livre-3">
              <h3>{books[5].title}</h3>
            </button>

            <button type="button" className="livre-4">
              <h3>{books[4].title}</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
