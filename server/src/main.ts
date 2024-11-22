// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

const books = [
  {
    title: "Harry Potter 1",
    id: 1,
    cover:
      "https://cdn1.booknode.com/book_cover/835/full/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-835229.jpg",
    has_fulltext:
      "Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée. Un géant vient le chercher pour l'emmener à Poudlard, la célèbre école de sorcellerie où une place l'attend depuis toujours. Voler sur des balais, jeter des sorts, combattre les Trolls : Harry Potter se révèle un sorcier vraiment doué. Mais quel mystère entoure donc sa naissance et qui est l'effroyable V..., le mage dont personne n'ose prononcer le nom ?",
    author: "Joanne Kathleen Rowling",
  },
  {
    title: "Les Hauts de Hurle-Vent",
    id: 2,
    cover:
      "https://cdn1.booknode.com/book_cover/1048/full/les-hauts-de-hurle-vent-1048216.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Emily Brontë",
  },
  {
    title: "1984",
    id: 3,
    cover: "https://cdn1.booknode.com/book_cover/72/full/1984-72084.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "George Orwell",
  },
  {
    title: "L'Étranger",
    id: 4,
    cover: "https://cdn1.booknode.com/book_cover/603/full/letranger-603252.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Belinda Cannone",
  },
  {
    title: "L'Odyssée",
    id: 5,
    cover:
      "https://cdn1.booknode.com/book_cover/1260/full/lodyssee-1260023.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Peter Van den Ende",
  },
  {
    title: "Hamlet",
    id: 6,
    cover: "https://cdn1.booknode.com/book_cover/4071/full/hamlet-4070553.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "William Shakespeare ",
  },

  {
    title: "Contes",
    id: 7,
    cover: "https://cdn1.booknode.com/book_cover/69/full/contes-69079.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Ernst Theodor Amadeus Hoffmann",
  },
  {
    title: "Le Rouge et le Noir",
    id: 8,
    cover:
      "https://cdn1.booknode.com/book_cover/119/full/le-rouge-et-le-noir-119001.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Jean-Blaise Djian",
  },

  {
    title: "Madame Bovary",
    id: 9,
    cover: "https://cdn1.booknode.com/book_cover/2/full/madame-bovary-2395.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Gustave Flaubert",
  },
  {
    title: "L'Iliade",
    id: 10,
    cover: "https://cdn1.booknode.com/book_cover/1147/full/liliade-1147068.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: " Homère",
  },

  {
    title: "Anna-Karénine",
    id: 11,
    cover:
      "https://cdn1.booknode.com/book_cover/552/full/anna-karenine-552219.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "André Maurois",
  },
  {
    title: "Les Mille et Une Nuits",
    id: 12,
    cover:
      "https://cdn1.booknode.com/book_cover/5081/full/les-mille-et-une-nuits-5080925.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Andrew Lang",
  },

  {
    title: "Les Métamorphoses Livre I à V",
    id: 13,
    cover:
      "https://cdn1.booknode.com/book_cover/188/full/les-metamorphoses-livre-i-a-v-188211.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Ovide",
  },
  {
    title: "Voyage au bout de la nuit",
    id: 14,
    cover:
      "https://cdn1.booknode.com/book_cover/886/full/voyage-au-bout-de-la-nuit-885559.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Louis-Ferdinand Céline ",
  },
  {
    title: "Crime et châtiment",
    id: 15,
    cover:
      "https://cdn1.booknode.com/book_cover/141/full/crime-et-chatiment-140603.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Fiodor Dostoïevski ",
  },
  {
    title: "Le Vieil Homme et la Mer",
    id: 16,
    cover:
      "https://cdn1.booknode.com/book_cover/0/full/le-vieil-homme-et-la-mer-195.jpg",
    has_fulltext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    author: "Ernest Hemingway ",
  },
];

// app.get("/books", (req, res) => {
//   console.info("req", req.query);
//   const { title } = req.query;
//   console.info("title", title);

//   if (!title) {
//     return res
//       .status(400)
//       .json({ message: "veuillez founir un titre pour la recherche" });
//   }
//   const filteredbooks = books.filter((book) =>
//     book.title.toLowerCase().includes(title.toLowerCase()),
//   );

//   if (filteredbooks.length === 0) {
//     res.sendStatus(404).json({ message: "Aucun livre trouvé avec ce titre" });
//   }

//   return res.json(filteredbooks);
// });

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);

  res.json(book);
});

app.get("/authors", (req, res) => {
  res.json([
    { author: "Emily Brontë" },
    { author: "Joanne Kathleen Rowling" },
    { author: "Emily Brontë" },
    {},
    {},
  ]);
});

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
