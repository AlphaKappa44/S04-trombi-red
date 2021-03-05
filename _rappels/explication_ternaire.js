const lang = 'en';
let message;

// TERNAIRE
// TERNARY

// un ternaire sert à remplacer un if / else, et a le faire sur une seule ligne !
// un ternaire est une autre facon d'écrire le code, plus concise
// tout ce qu'on fait avec un ternaire, on peut le faire aussi avec un if / else

if (lang == 'en') {
  message = 'Hello';
} else {
  message = 'Bonjour';
}

// équivalent du if / else du dessus
// en premier on met la condition : lang == 'en'
// on met un ? pour séparer
// en second, on met ce que l'on renvoie, si la condition est vraie
// on met un : pour séparer
// en dernier, on met ce que l'on renvoie, si la condition est fausse
message = lang == 'en' ? 'Hello' : 'Bonjour';

console.log(message);

// note : on pourrait se passer de la variable intermédiaire : 

console.log(lang == 'en' ? 'Hello' : 'Bonjour');