const dataMapper = require('../app/dataMapper');

const studentController = {
    showAllStudents: (req, res) => {
        // objectif : je récupère dans la base de données, tous les étudiants.
        // ensuite : si la requete réussit, j'affiche une vue (ejs)
        // a laquelle je donnerai tous mes étudiants.

        //on fait la requete des promos.
        dataMapper.getAllStudents((error, result) => {
            if (error) { // si on a une erreur... on l'affiche.
                console.log('error: ', error);
            } else {
                // je récup dans result.rows le resultat de ma requete SQL
                // ici, la liste des promos
                const studentsFromDatabase = result.rows;

                // on affiche les promos, avec la vue "promos"
                res.render(
                    'students', // le nom de ma vue (promos.ejs)
                    {
                        // un objet qui va contenir tout ce que je veux donner
                        // a ma vue.
                        // je donne un une clé promos qui contient la variable
                        // promosFromDatabase en provenance de ma DB.
                        students: studentsFromDatabase
                    }
                );
            }
        });
    },
    showAddStudentPage: (req, res) => {
        // ici, je veux récupérer la liste des promotions.
        // ensuite, je la donnerai à ma vue (2nd param de render)

        dataMapper.getAllPromos((error, result) => {
            if (error) {
                console.log('error: ', error);
                // idéalement ici, en cas d'erreur, il faudrait le remonter a l'utilisateur.
                // ou pas !
                // en tout cas, faudrait faire un truc : 
                // page d'erreur spéciale
                // soit la meme page, avec un msg d'erreur
                // soit ne pas assumer : et rediriger vers /
            } else {
                // si jarrive ici, tout s'est bien passé.

                // mes promos sont dans result.rows.
                const promosFromDatabase = result.rows;

                res.render('add_student', {
                    // je donne les promos à ma vue.
                    promos: promosFromDatabase
                });
            }
        });
    },
    addStudent: (req, res) => {
        // une bonne premiere étape, ce serait de console.loger
        // le "body" de notre requete.
        // body = contenu. c'est a dire : le contenu du formulaire.
        // rappels : req.query = parametres GET
        // req.params = parametre d'URL
        // req.body = "corps" du POST (contenu du formulaire)
        console.log(req.body);

        // on appelle le dataMapper
        dataMapper.addStudent(req.body,
            // début callback
            (error, result) => {
            // le callback : si je suis la dedans, la requete a fini.
            if (error) {
                console.log(error);
            } else {
                // si jarrive la dedans, jai bien un résultat.
                res.redirect(
                    `/promo/${req.body.promo}/students?` + 
                    `newStudentLastName=${req.body.last_name}` + 
                    `&newStudentFirstName=${req.body.first_name}`
                );
            }
        }
        // fin callback;
        );
    }
}

module.exports = studentController;
