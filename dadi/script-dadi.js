// PLANNING

/*
Recupero gli elementi dal DOM
Creare un array con i numeri di un dado
Assegnare un numero random al giocatore
Assegnare un numero random alla CPU
Fare il confronto per stabilire il vincitore e stampare il risultato

*/

// # STAGING

// * Recupero gli elementi dal DOM
const playerElement = document.getElementById('player');
const cpuElement = document.getElementById('cpu');
const winnerElement = document.getElementById('winner');

//*  Creare un array con i numeri di un dado

randomNumbers = [1, 2, 3, 4, 5, 6]

// # DATA GATHERING

// # EVENT HANDLING

// # PROCESSING

// * Assegnare un numero random al giocatore

const playerNumber = randomNumbers[Math.floor(Math.random() * 6)];
console.log('Player', playerNumber)

// * Assegnare un numero random alla CPU

const cpuNumber = randomNumbers[Math.floor(Math.random() * 6)];
console.log('CPU', cpuNumber)


// # OUTPUT 

// * Fare il confronto per stabilire il vincitore e stampare il risultato

let message = ' ';

if (playerNumber === cpuNumber) {
    message = 'C\'è stato un pareggio.'
} else {
    message = (playerNumber > cpuNumber) ? "Hai vinto!" : "Hai perso.";
}
console.log(message);

playerElement.innerText = `Il tuo numero: ${playerNumber}`;
cpuElement.innerText = `Il mio numero: ${cpuNumber}`;
winnerElement.innerHTML = message;