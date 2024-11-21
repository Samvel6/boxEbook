import "./HomePage.css";
import { useEffect, useState } from "react";

interface Book {
  id: number;
}

function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const bookfetch = () => {
      fetch("https://random-data-api.com/api/coffee/random_coffee")
        .then((response) => response.json())
        .then((data: Book[]) => setBooks(data));
    };

    bookfetch();
  }, []);

  console.info(books);

  return (
    <div className="home">
      <h2>boite a livre</h2>
      <div className="boite-a-livre">
        <div className="boite-a-livre-haut">
          <div className="boite-a-livre-gauche">
            <button type="button" className="livre-1" />

            <button type="button" className="livre-2" />

            <button type="button" className="livre-3" />

            <button type="button" className="livre-4" />
          </div>
          <div className="boite-a-livre-droite"> </div>
        </div>

        <div className="boite-a-livre-bas">
          <div className="boite-a-livre-gauche"> </div>
          <div className="boite-a-livre-droite"> </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
