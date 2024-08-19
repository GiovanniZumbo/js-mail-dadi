// PLANNING

/*
Creare un array con le email autorizzate
Recuperare gli elementi dal DOM
Confrontare la mail dell'utente con il mio elenco
Comunicare l'esito
 */

// # STAGING

// * Creare un array con le email autorizzate 

authMails = [
    "mariorossi01@gmail.com",
    "pietrobianchi02@gmail.com",
    "aldoverdi03@gmail.com",
    "marcogialli04@gmail.com"
]

let message = '';

// # DATA GATHERING

// * Recuperare gli elementi dal DOM

const resultElement = document.getElementById('result');
const button = document.querySelector('button');
const input = document.querySelector('input');

// # EVENT HANDLING

// * Confrontare la mail dell'utente con il mio elenco

button.addEventListener('click', function () {
    const inputValue = input.value.trim();

    for (let i = 0; i < authMails.length; i++) {
        let mail = authMails[i];

        message = (inputValue === mail) ? "Accesso autorizzato" : "Accesso negato";
    }
    console.table(authMails)

    resultElement.innerText = message;
})

// # PROCESSING



// # OUTPUT 
