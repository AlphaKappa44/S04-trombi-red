## Clés primaires et étrangères

### Clés primaires

Une clé primaire est formée d'une colonne de la table qui identifie de manière unique un enregistrement dans une table. Elle permet ainsi d'éviter les doublons. Par exemple, le numéro d'étudiant permet d'identifier une étudiant de manière unique. Une clé primaire peut être un code en partie compréhensible comme le numéro de sécurité sociale ou être un champ numérique auto-incrémenté.

### Clés étrangères

Une clé étrangère identifie une colonne d'une table comme référençant une colonne d'une autre table (la table référencée). Ce qui veut dire que la clé dans la table référencante (par exemple promo_id) doit exister dans la table référencée (par exemple, id d'une promo).

En des termes plus simples :

- si je référence une promo_id dans une des colonnes de student :
  - une promo doit exister avec cet id
  - je ne pourrai pas supprimer cette promo, sans supprimer les lignes (student) qui la référencent (promo_id)

## UX/UI

Avant de coder, on va prendre un petit instant pour réfléchir à comment sera disposé notre contenu.
C'est ce que l'on appelle la phase de wireframe https://fr.wikipedia.org/wiki/Wireframe_(design).
A cette phase, on ne met pas de mise en forme : pas de couleurs, pas de polices spéciales, pas d'images de fond, pas de bords arrondis, etc. On appellera cette phase UX (User Experience).

Plus tard, lorsque cette maquette fonctionelle sera validée par le client, on pourra en faire une maquette finale : la maquette réalisée par un graphiste, avec la charte graphique finale du site, les couleurs, les images... On appellera cette phase UI (User Interface)


## Les variables d'environnement

Lorsque l'on est seul à travailler sur un projet : tout va bien.
On choisit le port qu'on veut, on l'écrit dans le code en dur sans se poser de question,
Et on le donne à `app.listen()`.

Si on a une erreur EADDRINUSE (adresse déja utilisée), pas de souci, on regarde ce qu'on a comme terminal d'ouvert, on ferme tout serveur sur le même port et on réessaye. Ou bien on écrit tout simplement un numéro de port différent.

### Problème

Si je travaille avec mon copain Christophe. Je n'ai aucune garantie que son port 3000 est libre. Je ne peux donc pas me permettre d'écrire `app.listen(3000)` : peut-être que ce port est déja occupé chez lui : 
- soit pour un autre projet sur lequel il travaille...
- soit pour un logiciel qui tourne sur sa machine
    - son serveur minecraft
    - son serveur mumble
    - etc.

### Solution

Il faudrait que chaque personne essayant de lancer le projet, puisse choisir sur quel port l'écoute (listen) aura lieu.

Pour ce faire, on va utiliser un truc super chouettte : **les variables d'environnement**.



## Controllers

Vous avez sans doute remarqué que nos fichiers router.js devenaient longs comme le bras...
Le problème c'est qu'on y fait plusieurs choses : 

- on associe une route (une URL) à un comportement
- et on décrit le comportement.

Pour simplifier tout ca, on va déporter la définition des traitements (la fonction avec (req, res)) dans un autre fichier, que l'on appellera le controleur.

Si l'on a plusieurs choses a manipuler, on découpera nos controleurs par ressources.

Par exemple : 

- studentController
- promoController
- teacherController

Se référer au fichier `app/router.js` et aux controleurs définis dans `controllers/`  