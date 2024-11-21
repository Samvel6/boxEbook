import Volume from "../components/Volume";
import "../components/Books.css";
import { getAllBooks } from "../components/data/getAllBooks";

interface Book {
  has_fulltext?: string;
  cover_edition_key: string;
  title: string;
  name: string;
}

function Book({ title, cover_edition_key, name }) {
  return (
    <>
      <div className="books-container">
        <Volume title={""} cover_edition_key={""} name={""} has_fulltext={""} />
        <h2>Book Title</h2>
      </div>
    </>
  );
}

export default Book;
