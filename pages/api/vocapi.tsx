import fs from "fs";
import path from "path";

// pour retourner une PAI de base il faut la fonction handler de base :
export default function handler(req: any, res: any) {
  if (req.method === "GET") {
    // The process.cwd() method returns the current working directory of the Node.js process.
    // on cherche le chemin donné par la méthode join()
    const filePath = path.join(process.cwd(), "data", "listes.json");
    // Lire le fichier (venant du filePath) et retourner les données
    const fileData = fs.readFileSync(filePath);
    // On retourne ces données en JavaScript
    const data = JSON.parse(fileData.toString());

    // la requête répond que ça a fonctionné
    res.status(200).json(data);
  } else if (req.method === "POST") {
    // Pour isoler les motes entrées dans les inputs du formulaire de add.js
    const enWord = req.body.en;
    const frWord = req.body.fr;

    // Création d'un objet
    const newWord = {
      en: enWord,
      fr: frWord,
    };

    const filePath = path.join(process.cwd(), "data", "listes.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData.toString());

    data.englishList[0].data.push(newWord);
    // création d'un fichier en remplaçant l'ancien et en transformant le JS en JSON
    fs.writeFileSync(filePath, JSON.stringify(data));

    // Envoie d'une réponse avec un statut comme quoi tout a bien fonctionné
    res.status(201).json({ message: "Succès !" });
  }
}
