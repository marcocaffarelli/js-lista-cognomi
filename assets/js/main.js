var cognomeUtente = prompt("Inserisci il tuo Cognome");
//console.log("cognomeUtente");
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
// console.log(cognomeUtente);
// array cognomi
var cognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Verdi",
  "Balsano"
]

// aggiungere cognome all'array
cognomi.push(cognomeUtente)
// console.log(cognomi);

// ordinare alfabeticamente la l'array
cognomi.sort()
// console.log(cognomi);

// posizione del cognome utente nella lista
var posizione = cognomi.indexOf(cognomeUtente)
// console.log(posizione);
