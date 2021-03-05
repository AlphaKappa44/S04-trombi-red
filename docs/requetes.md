# Requetes

## Challenge E04

### Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5

```sql
INSERT INTO "student" 
("first_name", "last_name", "github_username", "profile_picture_url", "promo_id")
VALUES
('Chuck', 'Norris', 'walkertexasranger', 'http://photodesgens.fr/chuck.png', 5);
```

### Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga (github)

```sql
INSERT INTO "promo"("id", "name") VALUES(500, 'Cesar');
```

### Mettre à jour la promo 5 pour la renommer "Cleo"

```sql
UPDATE "promo" SET "name"='Cleo' WHERE "id"=5;
```

### Supprimer la promo 123

```sql
DELETE FROM "student" WHERE "promo_id"=123;
DELETE FROM "promo" WHERE "id"=123;
```

Note : avant de supprimer une ligne, on doit supprimer tout enregistrement référencant cette ligne.

## Challenge E03

### toutes les promos, dans l'ordre alphabétique

```sql
SELECT * FROM "promo" ORDER BY "name";
```

### Tous les étudiants, dans l'ordre alphabétique des noms de famille

```sql
SELECT * FROM "student" ORDER BY "last_name";
```

### Tous les étudiants de la promo 135

```sql
SELECT * FROM "student" WHERE "promo_id"=135;
```

### Les étudiants dont prénom commence par "Max" ou le nom commence par "Ha"

```sql
SELECT * FROM "student" WHERE "last_name" LIKE 'Ha%' OR "first_name" LIKE 'Max%';
```
