import { useState } from "react";
import "./Donatepage.css";
import Uploadfunction from "./Uploadfunction";
import "./Uploadfunction.css";

interface Donatepage {
  title: string;
  author: string;
  description: string;
  link: string;
}
const Donatepage = () => {
  const [books] = useState<Donatepage[]>([]);
  const [bookDetails] = useState<Donatepage>();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="donate-book">
      <div>
        <h1>Comment se passe la donation de vos livres 🤓?</h1>
        Préparez vos ebooks 📚<br />
        <p>
          1. Assurez-vous que les livres que vous souhaitez donner sont en bon
          état:
          <br />
          sans pages manquantes, déchirures importantes ou dommages majeurs.
          <br />
          Tous les genres et formats sont les bienvenus,
          <br />
          qu’il s’agisse de romans, de manuels scolaires, de bandes dessinées ou
          autres.
        </p>
        <p>
          2. Renseignez les détails des livres Sur notre plateforme, cliquez sur
          le bouton "Donner un livre" et remplissez le formulaire en indiquant :
          Le titre du livre, L'auteur, Une courte description ou son état
          général (facultatif). Si possible, ajoutez une photo pour que les
          bénéficiaires puissent mieux visualiser.
        </p>
        <p>
          3. Soumettez votre donation et Une fois les informations renseignées,
          validez votre donation.
          <br />
          Votre livre sera alors ajouté à notre liste de disponibilité pour les
          associations, bibliothèques communautaires, ou particuliers dans le
          besoin.
          <br />
        </p>
        4. Nous nous occupons du reste ! Dès qu’un bénéficiaire est intéressé
        par votre livre, nous organisons la collecte et la distribution.
        <p>
          5. Un geste qui fait la différence. Votre donation contribue à la
          promotion de l’accès à la culture et au savoir pour tous. Merci pour
          votre générosité 😊
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nom du ebook"
          value={bookDetails?.title}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Auteur du ebook"
          value={bookDetails?.author}
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Le lien du ebook"
          value={bookDetails?.link}
          required
        />

        <textarea
          name="description"
          placeholder="Résumé du ebook"
          value={bookDetails?.description}
        />
        <Uploadfunction />
        <button className="submit-btn" type="submit">
          Donner un ebook
        </button>
      </form>

      <div className="book-list">
        <h2>Ebooks donnés:</h2>
        <ul>
          {books?.map((book) => (
            <li key={book.title}>
              <strong>{book.title}</strong> by {book.author} <br />
              {book.description && <small>{book.description}</small>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Donatepage;
