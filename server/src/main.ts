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
    { title: "Harry Potter 1" },
    { title: "Les Hauts de Hurle-Vent" },
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
  res.json([
    { name: "Emily Brontë" },
    { name: "Emily Brontë" },
    { name: "George Orwell" },
    { name: "Emily Brontë" },
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
