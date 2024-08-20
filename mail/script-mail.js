// PLANNING

/*
Creare un array con le email autorizzate
Recuperare gli elementi dal DOM
Confrontare la mail dell'utente con il mio elenco
Comunicare l'esito
 */

// # STAGING


// # DATA GATHERING

// * Recuperare gli elementi dal DOM

const resultElement = document.getElementById('result');
const button = document.querySelector('button');
const input = document.querySelector('input');

// * Creare un array con le email autorizzate 

const authMails = [
    "mariorossi01@gmail.com",
    "pietrobianchi02@gmail.com",
    "aldoverdi03@gmail.com",
    "marcogialli04@gmail.com"
]

let message = '';

// # EVENT HANDLING

// * Confrontare la mail dell'utente con il mio elenco

/* Se avessimo preso il form, avremmo scritto 
form.addEventListener ('submit', function (e) {
e.preventDefault()
})
*/

button.addEventListener('click', function () {
    const inputValue = input.value.trim();

    for (let i = 0; i < authMails.length; i++) {

        const mail = authMails[i];

        const message = (inputValue === mail) ? "Accesso autorizzato" : "Accesso negato";

        console.log(i + " " + message); // funzionamento del ciclo in console

        if (authMails[i] === inputValue) {
            break;
        } // Mi permette di fermare il ciclo for (causa un piccolo leak di memoria)

        //* Soluzione migliore del break: cambiare la condizione del for aggiungendo && !isAllowed
    }

    console.table(authMails)

    // # OUTPUT 

    resultElement.innerText = message;
})


