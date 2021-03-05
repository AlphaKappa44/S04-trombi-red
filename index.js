// On récupère le package express
const express = require('express');

// body-parser est un module déja installé
// qui va nous permettre de savoir "lire" des requetes post.
// dans les versions "récentes" d'Express,
// il est préinstallé en même temps que le framework
const bodyParser = require('body-parser');

// on charge le module DOTENV qui va charger nos variables d'environnement
require('dotenv').config();

// convention : on écrit nos constantes en capitales
// on parle de constantes pour ce genre de variable qui n'est amenée a changer.
// typiquement : un port, une url, etc
const PORT = process.env.PORT || 3000;

// on initialise une application avec express
const app = express();


// on récupère notre routeur
const router = require('./app/router');


// on définit le moteur de rendu afin d'utiliser EJS
app.set('view engine', 'ejs');

// on définit le dossier qui va contenir nos vues
app.set('views', 'views');

// je cable mon dossier public qui contient les fichiers statiques
// css, js coté client, images, etc.
app.use(express.static('public'));

// quand on reçoit une requête POST,
// bodyParser s'occupe de rendre son "contenu" disponible
// attention : a faire avant le chargement du routeur.
app.use(bodyParser.urlencoded({ extended: true }));

// on "branche" ce routeur à notre application express
app.use(router);

// on lance notre application
// sur le port défini dans le fichier .env
// et si la personne oublie de remplir son .env ?
// on peut faire une petite condition pour voir si il est rempli :)
// if (process.env.PORT) {
//     app.listen(process.env.PORT);
// } else {
//     app.listen(3000);
// }

app.listen(PORT);