
function maFonction() {
    console.log('Appel à maFonction');

    return () => {
        console.log('Appel de la fonction renvoyée par maFonction');
    }
}

// j'apelle maFonction() et je stocke le résultat dans une variable test
const test = maFonction();

// je regarde ce qui est dans test : une fonction (celle retournée !)
console.log(test);

// j'apelle la fonction test (le retour de "maFonction")
test();

// setTimeout(maFonction(), 1500);