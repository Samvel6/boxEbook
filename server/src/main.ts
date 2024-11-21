// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

app.get("/books", (req, res) => {
  res.json([
    {
      title: "Harry Potter 1",
      author: "Joanne Kathleen Rowling",
      cover:
        "https://cdn1.booknode.com/book_cover/835/full/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-835229.jpg",
      has_fulltext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    },
    {
      title: "Les Hauts de Hurle-Vent",
      author: "Emily Brontë",
      cover:
        "https://cdn1.booknode.com/book_cover/1048/full/les-hauts-de-hurle-vent-1048216.jpg",
      has_fulltext:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices porttitor felis vel viverra. Phasellus lobortis pulvinar enim, in porta eros vulputate feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce rutrum ante ligula, sed pulvinar nulla varius eget. Aenean at urna nec erat lobortis tristique sed et dui. Sed at risus vitae felis egestas viverra. In at lobortis lectus. Donec id rutrum libero, vel ullamcorper dui. Cras quis ipsum aliquam, eleifend dui ut, tempor nunc. Suspendisse tristique molestie tincidunt. Maecenas purus eros, scelerisque sit amet tellus aliquam, tincidunt vestibulum augue. Nunc rutrum velit sed magna bibendum, hendrerit sodales est aliquet. Curabitur id augue vel diam molestie accumsan non eu tellus. Aliquam pellentesque aliquam quam, ac vehicula justo consequat at. Mauris sodales viverra urna, ac feugiat sapien fringilla vitae.",
    },
    { title: "1984" },
    { title: "L'Étranger" },
    { title: "L'Odyssée" },
    { title: "Hamlet" },
    { title: "Contes" },
    { title: "Le Rouge et le Noir" },
    { title: "Madame Bovary" },
    { title: "L'Iliade" },
    { title: "Anna Karénine" },
    { title: "Les Mille et Une Nuits" },
    { title: "Les Métamorphoses Livre I à V" },
    { title: "Voyage au bout de la nuit" },
    { title: "Crime et châtiment" },
    { title: "Le Vieil Homme et la Mer" },
  ]);
});

app.get("/authors", (req, res) => {
  res.json([{}, {}, { author: "George Orwell" }, { author: "Emily Brontë" }]);
});

app.get("/books", (req, res) => {
  res.json([
    {},
    {
      cover:
        "https://cdn1.booknode.com/book_cover/862/full/orgueil-et-prejuges-861757.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/5223/chicago_sin_tome_1_nid_de_peche-5223314-132-216.jpg",
    },
    {},
    { cover: "https://cdn1.booknode.com/book_cover/72/full/1984-72084.jpg" },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/603/full/letranger-603252.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/1260/full/lodyssee-1260023.jpg",
    },
    { cover: "https://cdn1.booknode.com/book_cover/69/full/contes-69079.jpg" },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/119/full/le-rouge-et-le-noir-119001.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/2/full/madame-bovary-2395.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/1147/full/liliade-1147068.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/552/full/anna-karenine-552219.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/5081/full/les-mille-et-une-nuits-5080925.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/188/full/les-metamorphoses-livre-i-a-v-188211.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/141/full/crime-et-chatiment-140603.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/0/full/le-vieil-homme-et-la-mer-195.jpg",
    },
    {
      cover:
        "https://cdn1.booknode.com/book_cover/0/full/le-vieil-homme-et-la-mer-195.jpg",
    },
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
