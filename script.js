// prendiamo l'input dell'utente
var cognomeUtente = prompt("inserire il proprio cognome");

// creiamo l'array presistente cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomiUtenti = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log("il cognome inserito è: " + cognomeUtente);
console.log(cognomiUtenti);

// controlli sull'input
if(!isNaN(cognomeUtente)){
    console.log("si prega di inserire un cognome umano");
} else {
// ramo con l'input valido 
// inserisco l'input nell'array
cognomiUtenti.push(cognomeUtente);

}

console.log(cognomiUtenti);


// ordiniamo la lista alfabeticamente

// stampiamo l'output di nome e posizione "umana"