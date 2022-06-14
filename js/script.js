// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// // START
const userLevel = prompt('Scegli un livello (1-2-3)');

gameMaxRange = 0;

// se liv 1 - num da 1 a 100
if(userLevel === '1') {
    gameMaxRange = 100;
    // se liv 2 - num da 1 a 81
} else if(userLevel === '2') {
    gameMaxRange = 81;
    // se liv 3 - num da 1 a 49
} else if(userLevel === '3') {
    gameMaxRange = 49;
}
    
console.log(gameMaxRange);

// GENERO 16 BOMBE
    // range da 1 a max num (49, 81, 100)
const bombs = bombsGenesis(16, 1, gameMaxRange);
console.log(bombs)

// genero un array di 16 bombe
function bombsGenesis(numbofBombs, rangeMin, rangeMax) {
    
    const randomNumbersArray = [];

    while(randomNumbersArray.length < numbofBombs) {
        // CREARE NUM RANDOM DA RANGEMIN A RANGEMAX
        // rangeMin range minimo per i numeri random generati
        // rageMax range massimo dei numeri random generati
        const randomNum = getRndInteger(rangeMin, rangeMax);
        // PUSHIAMO SOLO SE NUM NON GIA PRESENTE
        if(!randomNumbersArray.includes(randomNum)) {
            randomNumbersArray.push(randomNum);
        }

    }
    // return : array di numeri random con lunghezza numbofBombs
    return randomNumbersArray;
}

// FUNZIONE CHE GENERA RANDOM NUMBERS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
