// ici, on va apprendre à se connecter à une base de données...
// depuis Javascript (coté serveur, Node) !

// on commence par récupérer le module PG
// n'oubliez pas de le npm install (npm install pg)
const pg = require('pg');

// on crée un client en se connectant a un serveur de base de données

// pour rappel, dans le terminal, on se connectait ainsi :
// psql -h pg.oclock.lan -U etudiant -d trombi
// et on donnait le mdp : js4life.

// on crée la connection SQL : en définissant les parametres.
// ne vous inquiétez pas pour le new => rdv en S5
const client = new pg.Client({
    user: 'etudiant',
    host: 'pg.oclock.lan',
    database: 'trombi',
    password: 'js4life'
});

// on ouvre la connexion !
client.connect();

// on stocke une requete dans une string.
const queryPromo = "SELECT * FROM promo;";

// pour faire une requete, on appelle client.query.
// 2 parametres.
// - 1 : la requete en elle meme (string)
// - 2 : un callback, qui sera exécuté, lors de la réponse du serveur SQL.
//      Ce callback prend 2 parametres : une éventuelle erreur, ou bien le résultat.
client.query(queryPromo, (error, result) => {
    if (error) { // si on a une erreur... on l'affiche.
        console.log('error: ', error);
    } else {
        // si on arrive ici, tout s'est bien passé.
        // notre résultat (lignes) sera rangé dans result.rows
        // dans result tout court, on trouve plusieurs autres infos annexes :
        // description des colonnes, nombre de résultat, requete sql... etc.
        console.log('result :', result.rows);

        // on ferme la connection si on n'en a plus besoin.
        client.end();
    }
});

/* 
  client.query parle au serveur SQL, et lui donne la requete.
  il attend la réponse.
  lorsque le serveur répond, 2 cas :
  le serveur a répondu une erreur -> le client SQL va donner cette erreur en premier param du callback (error)
  le serveur a répondu OK et envoyé des données -> le client va ranger ces données dans result
*/
