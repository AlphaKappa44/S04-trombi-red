# Challenges

## Challenge E05

## Ajouter un étudiant

Sur la page d'accueil, un nouveau bouton a fait son apparition : "Ajouter un étudiant".

C'est un lien vers un formulaire !

### Étape 1 : Remplir le select

Inspire toi de ce qui a été fait dans les autres controllers pour modifier la méthode `studentController.showAddStudentPage`.

<details>
<summary>Un coup de main ?</summary>

- Commence par require `dataMapper` dans le controller.
- Il faut ensuite appeller `dataMapper.getAllPromotions`, en définissant le callback !
- Dans ce callback, n'oublie pas le traitement de l'erreur éventuelle, puis passe la liste des promotions à la view `student/add`.
- Dans la view `add_student.ejs`, utilise la liste des promos pour créer des `<option>`

</details>

### Étape 2 : Traiter le POST

Utilise tout ce que tu connais pour traiter les informations du formulaire et ajouter un étudiant dans la base de données !

Remarque : on a déjà préparé la requete SQL ! cf [doc/requetes.md](./doc/requetes.md)

<details>
<summary>Un peu d'aide ?</summary>

- Il faut d'abord ajouter le middleware `express.urlencoded({extended: true})` à `app` dans `index.js`.
- Ensuite, il faut définir une route POST qui va déclencher la méthode `studentController.addStudent`.
- Il faut maintenant coder la méthode `studentController.addStudent` !
  - Ajoute une nouvelle méthode `addStudent(studentInfo, callback)` dans le `dataMapper`. Cette méthode doit lancer une requête "INSERT ..." en utilisant les paramètres passés dans l'objet `studentInfo`. Inspire toi de ce qui a été fait précédement !
  - Dans `studentController.addStudent`, il faut maintenant appeller `dataMapper.addStudent` en lui passant les bons paramètres, et bien sur, en définissant un callback !
  - Dans ce callback, si tout s'est bien passé, redirige l'utilisateur vers la page de détails de la promotion sélectionnée.

</details>

## Challenge E04

### 1 - Ecrire du SQL

Reprendre le fichier `docs/requetes.md` et y ajouter les requêtes suivantes :

- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga (github)
- Mettre à jour la promo 5 pour la renommer "Cleo"
- Supprimer la promo 123

### 2 - Encore du SQL depuis express.js

Créer une nouvelle route : `/promo/:id/delete`.

Lorsque l'on atteint cette route, supprimer entièrement la promo qui possède l'id dans l'url.

Attention : Il s'agit de supprimer TOUTES les données de cette promo. C'est a dire Étudiants (de la promo) ET promo.

### 3 - Maxi bonus (#jemennuie)

Vous commencez à voir dans quelle direction on va...
Vous pouvez prendre un peu d'avance : amusez vous a lister des étudiants, les supprimer, etc... Depuis les routes nécessaires. Bien sur c'est le sujet des jours suivants, n'allez pas trop loin :D

## Challenge E03

### Écrire du SQL

#### Rappel connexion

`psql -h pg.oclock.lan -U etudiant -d trombi`
mdp : `js4life`

Dans le dossier doc, crée un fichier sql.md. Dans ce fichier, écris les requêtes SQL pour obtenir les informations suivantes :

- toutes les promos, dans l'ordre alphabétique
- tous les étudiants, dans l'ordre alphabétique des noms de famille
- tous les étudiants de la promo 135
- les étudiants dont le nom ou le prénom ressemble à "max"

Bien entendu, tester les requetes sur le serveur ! Avant de les noter dans le markdown.

### Requêtes depuis le serveur (Node)

En t'inspirant de ce qui a été fait dans test_pg.js, modifie la méthode showAllPromos du promoController pour qu'elle utilise une requête SQL afin d'afficher la liste des promos !

### Bonus

Sur le même principe, modifie la méthode showPromoStudents.

Quand tu es sur de toi, supprime les fichiers json du dossier data !

## Challenge E02

Implémentez la route `/promotion/:id/students` :

Accessible depuis la fiche d'une promo, cette route liste les étudiants d'une promotion.

Correspond à la méthode de votre choix, dans le controleur de votre choix (vous rangez votre maison comme vous voulez !)
Utilisez require pour récupérer les données des étudiants depuis les fichiers json, puis filtrez les données avec la méthode array.filter ou une boucle for.

En bonus, wireframing + intégration HTML/CSS 🎉

On ne code pas a l'arrache, on commence par faire une petite maquette fonctionelle (wireframe).
