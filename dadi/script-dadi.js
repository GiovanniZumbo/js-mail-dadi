// PLANNING

/*
Recupero gli elementi dal DOM
Assegnare un numero random al giocatore
Assegnare un numero random alla CPU
Fare il confronto per stabilire il vincitore e stampare il risultato

*/

// # STAGING

// * Recupero gli elementi dal DOM
const playerElement = document.getElementById('player');
const cpuElement = document.getElementById('cpu');
const winnerElement = document.getElementById('winner');
const button = document.querySelector('button');


// # DATA GATHERING

// # EVENT HANDLING

button.addEventListener('click', function () {

    const playerNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Player', playerNumber)

    const cpuNumber = Math.floor(Math.random() * 6) + 1;
    console.log('CPU', cpuNumber)

    let message;

    if (playerNumber === cpuNumber) {
        message = 'C\'è stato un pareggio.'
    } else {
        message = (playerNumber > cpuNumber) ? "Hai vinto!" : "Hai perso.";
    }

    console.log(message);

    playerElement.innerText = `Il tuo numero: ${playerNumber}`;
    cpuElement.innerText = `Il mio numero: ${cpuNumber}`;
    winnerElement.innerHTML = message;
})

// # PROCESSING

// * Assegnare un numero random al giocatore


// * Assegnare un numero random alla CPU


// # OUTPUT

// * Fare il confronto per stabilire il vincitore e stampare il risultato
