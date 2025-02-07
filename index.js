import express from "express";
import cors from "cors";

import dataEmplois from "./data/dataEmplois.js";

const app = express();

app.use(cors());

// Servir les fichiers statiques depuis le dossier "public"
app.use("/static", express.static("assets"));

// Route racine
app.get("/", (req, res) => {
	res.json("je suis dans le /");
});

// Route pour récupérer TOUS les emplois
app.get("/emplois", (req, res) => {
	res.json(dataEmplois);
});

// **Route pour récupérer un emploi spécifique par ID**
app.get("/emplois/:id", (req, res) => {
	const id = parseInt(req.params.id, 10); // Convertir l'ID en nombre

	// Recherche de l'emploi dans les données
	const emploi = dataEmplois.find((job) => job.id === id);

	if (emploi) {
		res.json(emploi); // Retourner les détails de l'emploi trouvé
	} else {
		res.status(404).send("Emploi non trouvé"); // Retourner une erreur si l'emploi n'existe pas
	}
});

app.listen(4242, () => console.log("http://localhost:4242"));
