
const dataMapper = require('../app/dataMapper');

const promoController = {
    showAllPromos: (req, res) => {
        // ici, on va faire la requete
        // pour récupérer les promos.
        // ensuite... on donnera le résultat a la vue
        // res.render.

        dataMapper.getAllPromos((error, result) => {
            if (error) { // si on a une erreur... on l'affiche.
                console.log('error: ', error);
            } else {
                // je récup dans result.rows le resultat de ma requete SQL
                // ici, la liste des promos
                const promosFromDatabase = result.rows;

                // on affiche les promos, avec la vue "promos"
                res.render(
                    'promos', // le nom de ma vue (promos.ejs)
                    {
                        // un objet qui va contenir tout ce que je veux donner
                        // a ma vue.
                        // je donne un une clé promos qui contient la variable
                        // promosFromDatabase en provenance de ma DB.
                        promos: promosFromDatabase
                    }
                );
            }
        });
    },
    showPromoStudents: (req, res) => {
        // on récupère le parametre promoId ainsi
        // si l'url est /promo/50/students...
        // j'aurai dans req.params.promoId "50"
        const promoId = req.params.promoId;

        // j'apelle la méthode showPromoStudents du datamapper.
        dataMapper.getStudentsInPromo(promoId, (error, result) => {
            // me voila dans le callback donné à showPromoStudents.

            if (error) { // si on a une erreur... on l'affiche.
                console.log('error: ', error);
            } else { // si j'ai pas d'erreur...
                // je stocke les étudiants (result.rows) dans une variable
                const studentsInPromoFromDatabase = result.rows;

                // maintenant... je fais la 2eme requete.
                // j'apelle la méthode getPromoById de dataMapper.
                dataMapper.getPromoById(promoId, (error, result) => {
                    // me voila dans le callback de la 2eme requete.
                    if (error) { // si on a une erreur... on l'affiche.
                        console.log('error: ', error);
                    } else { // si j'ai pas d'erreur...
                        // maintenant, dans result.rows.
                        // je vais trouver LA promo (il y aura une seule case dans le tableau)
                        const promoFromDatabase = result.rows[0];

                        // allez ouf j'ai tout ce qu'il me faut.
                        // on envoie la vue : 
                        res.render('promo_students', { // je donne en parametre a ma vue :
                            students: studentsInPromoFromDatabase,
                            promoName: promoFromDatabase.name,
                            // on donne le parametre GET "newStudent".
                            // ce parametre est rempli depuis la redirection
                            // apres l'ajout d'un étudiant
                            // studentController ln. 76
                            newStudentLastName: req.query.newStudentLastName,
                            newStudentFirstName: req.query.newStudentFirstName,
                        });
                    }
                });
            }
        });
    },
    deletePromo: (req, res) => {
        // ici, je vais coder la suppression d'une promo.
        // je commence par récupérer l'id de la promo à supprimer.
        const promoId = req.params.promoId;

            // je sais que, pour supprimer la promo, et les étudiants associés,
            // je dois faire les requetes suivantes : 
            //     DELETE FROM "student" WHERE "promo_id"=123;
            //     DELETE FROM "promo" WHERE "id"=123;
        // je fais une requete avec client.query
        // je dois le faire en 2 fois pour pouvoir utiliser les parametres de requete...

        dataMapper.deleteStudentsByPromoId(promoId, (error, result) => {
            if (error) { // si je recois une erreur (SQL)
                console.log('error :', error); // je l'affiche
            } else {
                // si on a result, ok, on envoie la 2eme requete
                dataMapper.deletePromoById(promoId, (error, result) => {
                    if (error) { // si je recois une erreur (SQL)
                        console.log('error :', error); // je l'affiche
                    } else {
                        // si j'arrive ici, mes 2 requetes ont bien eu lieu.

                        res.send("La promo a bien été supprimée");
                    }
                })
            };
        })
    },
};

// on exporte notre controlleur : un objet qui contient des fonctions.
module.exports = promoController;