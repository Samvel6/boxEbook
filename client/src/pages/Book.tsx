import Volume from "../components/Volume";

// interface Books {
//   has_fulltext?: string;
//   cover_edition_key: string;
//   author_name: string;
//   title: string;
// }

function Book() {
  const books = [
    {
      id: 1,
      title: "Harry Potter",
      image: "cover_edition_key",
    },
  ];

  return (
    <>
      <div className="books-container">
        {books.map((book) => (
          <button
            className="books-container-btn"
            type="button"
            key={book.id}
            onClick={() => {}}
          />
        ))}
        <Volume
          title={""}
          cover_edition_key={""}
          author_name={""}
          has_fulltext={""}
        />
      </div>
    </>
  );
}

export default Book;
