import Volume from "../components/Volume";
import "../components/Books.css";

interface Book {
  has_fulltext?: string;
  cover_edition_key: string;
  title: string;
  name: string;
}

function Book() {
  return (
    <>
      <div className="books-container">
        <Volume title={""} cover={""} author={""} has_fulltext={""} />
        <h2>Book Title</h2>
      </div>
    </>
  );
}

export default Book;
