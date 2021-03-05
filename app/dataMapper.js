// on require le module pg
const pg = require('pg');

// on crée la connection SQL : en définissant les parametres.
// ne vous inquiétez pas pour le new => rdv en S5
const client = new pg.Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_BASE,
    password: process.env.DATABASE_PASSWORD,
});

// ouverture de la connexion
client.connect();

// dataMapper : objectif : mettre dans un seul fichier nos requetes SQL
// le but : ne pas avoir de SQL dans notre controller
// afin de ne pas avoir de couplage fort...
// en d'autres termes, pouvoir partir de SQL facilement.
// dataMapper = un objet JS.
const dataMapper = {
    // on crée une méthode getAllPromos.
    // cette méthode contiendra : "comment je récupère mes promos"
    // cette méthode prend en paramètre, un callback...
    // qui sera éxécuté, lorsque j'ai terminé de récupérer mes promos.
    getAllPromos: (callback) => {
        // on stock la requete SQL dans une variable.
        const selectPromoQuery = `SELECT * FROM "promo";`;

        // client.query comme on connait : on donne la requete, puis le callback.
        // la seule différence : le callback provient maintenant d'au dessus : le controleur.
        client.query(selectPromoQuery, callback);
    },
    getAllStudents: (callback) => {
        const selectStudentQuery = `SELECT * FROM "student" ORDER BY "last_name";`

        client.query(selectStudentQuery, callback);
    },
    getStudentsInPromo: (promoId, callback) => {
        const selectPromoStudentsQuery = `SELECT * FROM "student" WHERE "promo_id"=$1;`

        client.query(selectPromoStudentsQuery, [promoId], callback);
    },
    getPromoById: (promoId, callback) => {
        const selectPromoById = `SELECT * FROM "promo" WHERE "id"=$1;`

        client.query(selectPromoById, [promoId], callback);
    },
    // ,
    deleteStudentsByPromoId: (promoId, callback) => {
        const deleteStudentsQuery = `DELETE FROM "student" WHERE "promo_id"=$1;`;

        client.query(deleteStudentsQuery, [promoId], callback);
    },
    deletePromoById: (promoId, callback) => {
        const deletePromoQuery = 'DELETE FROM "promo" WHERE "id"=$1;';

        client.query(deletePromoQuery, [promoId], callback);
    },
    addStudent: (studentInfo, callback) => {
       const insertStudentQuery = `
        INSERT INTO "student" 
        ("first_name", "last_name", "github_username", "promo_id")
        VALUES
        ($1, $2, $3, $4);
        `;

        client.query(
            insertStudentQuery,
            [
                studentInfo.first_name,
                studentInfo.last_name,
                studentInfo.github_username,
                studentInfo.promo,
            ],
            callback,            
        )
    }
};

module.exports = dataMapper;