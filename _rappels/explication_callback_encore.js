
function additionner(gauche, droite, callback) {
    const resultat = gauche + droite;
    console.log('Je suis dans la fonction additionner. Le resultat est : ', resultat);

    console.log('Et maintenant, japelle le callback');
    callback(resultat);
    console.log('Le callback a été appelé');
}

additionner(2, 3, (resultat) => {
    console.log('CALLBACK ! Resultat de laddition : ', resultat);
});

// problème : je ne veux pas voir le 2, 3
// je voudrais appeler directement, une fonction qui s'apelle "additionnerDeuxEtTrois"
// parallèle : dans le controleur, je ne veux pas voir de SQL.
// Donc :
// - je veux pas voir client.query
// - et je veux pas non plus voir son argument : la requete SQL.
// Je veux, a la fin de "additionnerDeuxEtTrois", exécuter une fonction,
// qui sera donnée elle meme en parametre, a additionnerDeuxEtTrois
// parallèle : le fameux (error, result);
function additionnerDeuxEtTrois(callback) {
    console.log('Je suis dans la fonction additionnerDeuxEtTrois');
    additionner(2, 3, callback);
}





additionner(2, 3, (resultat) => {
    console.log('CALLBACK ! Resultat de laddition : ', resultat);
});


additionnerDeuxEtTrois((resultat) => {
    console.log("okjirepokreokrgepokrgeok ! C'est bien " + resultat);
});
