// on récupère de nouveau express
const express = require('express');

// on crée un routeur, c'est a dire un module responsable de nos routes
const router = express.Router();

// on require nos controlleurs

const mainController = require('../controllers/mainController');
const promoController = require('../controllers/promoController');
const studentController = require('../controllers/studentController');
const aboutController = require('../controllers/aboutController');

// on définit notre première route.
// lorsque l'url "/" est atteinte, on va exécuter ce code.
router.get('/', mainController.homePage);

// une autre route, pour afficher le détail des promos
// lorsque tu recois une requete sur /promos
// alors, exécute la fonction showAllPromos de promoController
// showAllPromos est un callback 
router.get('/promos', promoController.showAllPromos);

// une route pour afficher les étudiants d'une promotion.
// forcément, on peut choisir la promotion que l'on veut, via un ID.
router.get('/promo/:promoId/students', promoController.showPromoStudents);

// une route pour supprimer une promotion
// et toutes les données qui y sont associées (ici, les étudiants)
router.get('/promo/:promoId/delete', promoController.deletePromo);

// un listing de tous les étudiants, quelle que soit leur promo.
router.get('/students', studentController.showAllStudents);

router.get('/student/add', studentController.showAddStudentPage);

router.post('/student/add', studentController.addStudent);

/*
    les (futures) routes de notre application
    /
    /promos
    /promo/12
    /promo/12/students
    /promo/12/:edit
    /promo/delete
    /students
    /student/123
    /student/123/:edit
    /student/delete
*/


// pas très utile pour l'instant.
router.get('/about', aboutController.aboutPage);


// on exporte ce routeur
module.exports = router;