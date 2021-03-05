# Trombin-o-clock

Ce projet est un site web affichant les différentes promotions de l'école O'Clock ainsi que les étudiants qui les constituent.

## Installation

- `npm install` afin d'installer les dépendances.
- `npm install -g node-dev` afin que le serveur se relance tout seul. 
- créer un fichier .env. À la racine du projet. En voici le contenu :

```
# Vous pouvez choisir le port de votre choix (Optionnel)
PORT=2500
# Les infos de connexion à la base donnée (Obligatoire)
DATABASE_USER="????"
DATABASE_HOST="????"
DATABASE_BASE="????"
DATABASE_PASSWORD="????"
```

Demander à Noé pour les infos de connexion, ou bien utiliser une base locale.

Note : si le port n'est pas défini dans le .env, le port 3000 sera utilisé par défaut.

## Initialiser la base

Un fichier `create_db.sql` est présent dans le dossier /data.
Pour l'executer sur sa machine : `psql -U USERNAME -d DATABASE -f ./create_db.sql`.
Ce fichier créera les tables student et promo, et les remplira de données de test.

## Lancement du projet

Pour lancer le projet : `node-dev index.js`

## Documentation

Le brief client, les use cases et les maquettes sont disponibles dans le dossier `docs/`.

## Données de test

Des données sous forme json sont présentes dans le dossier `data/`