console.log('JS OK');

/*
Traccia:
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
*/

// --------------------------------------------
// Fase iniziale:
// --------------------------------------------

// Prendiamo il bottone
// Agganciamo un'event listener (Funzione unica per il gioco)

// Funzione unica per il gioco
// Cambio il testo del bottone 'Conferma' = 'Riavvia'
// Svuoto eventuali componenti della griglia

// --------------------------------------------
// Fase preparatoria:
// --------------------------------------------

// Settare che le bombe sono 16
// Recuperiamo il valore dell'utente dalla tendina ( select )
// Calcoliamo in base al valore della tendina le celle che dobbiamo creare
// Poniamo una variabile che indichi i punti dell'utente
// Generare numeri casuali per le "bombe"
// Calcolare le celle valide ( safe ) escludendendo dalle celle quelle con delle bombe
// Creiamo una griglia di celle
// Aggiungiamo  l'eventlistener alle celle

// --------------------------------------------
// Quando una cella viene cliccata
// --------------------------------------------

// Controlliamo se è stata già cliccata
// Controllo se è una bomba
// ---- Se è una bomba lancio la funzione gameover ( la quale espliciterà se abbiamo perso per colpa di una bomba o se abbiamo completato il gioco )
// Coloriamo le celle secondo la traccia
// Incrementiamo il punteggio ( da far visualizzare in caso di bomba )
// Controlliamo che il punteggio sia uguale alla differenza tra il totale delle celle e le bombe ( Se si, l'utente ha vinto)

// --------------------------------------------
// Funzione 'GameOver'
// --------------------------------------------

// Coloriamo di rosso tutte le celle che contengono una bomba
// Rimuoviamo l'eventlistener da tutte le celle
// Se come risultato abbiamo una win comunichiamo all'utente che ha vinto
// Se come risultato abbiamo una lose comunichiamo all'utente che ha perso e gli comunichiamo quanti punti ha fatto

const play = () => { // ---------------------- La mia funzione 'play' 
    // Cambiamo il bottone da 'Conferma' a 'Riavvia'         
    confirmButton.innerText = 'Ricomincia';

    // Svuotiamo eventuali altri elementi della griglia
    const grid = document.getElementById('grid');
    grid.innerHTML = '';


}

const choise = document.getElementById('choise');
const confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', play);




