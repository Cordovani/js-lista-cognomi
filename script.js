// prendiamo l'input dell'utente
var cognUtente = [];
cognUtente = prompt("inserire il proprio cognome");

// creiamo l'array presistente cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomiUtenti = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log("il cognome inserito è: " + cognUtente);
console.log(cognomiUtenti);

// controlli sull'input
if (!isNaN(cognUtente)) {
    console.log("si prega di inserire un cognome umano");

} else {
    // ramo con l'input valido 
    // converto la prima lettera in maiuscolo per usare .sort()
    // cognUtente.charAt(0) = cognUtente.charAt(0).toUpperCase();
    // charAt(0) restituisce il carattere all'indice specificato e slice(1) l'array a partire dall'indice indicato.
     cognUtente = cognUtente.charAt(0).toUpperCase() + cognUtente.slice(1);
    
    // inserisco l'input nell'array
    cognomiUtenti.push(cognUtente);

    // ordiniamo la lista alfabeticamente
    // proviamo con sort() di default ordina alfabeticamente ascendente, anche con un array di appoggio mette le minuscole dopo le maiuscole
    cognomiUtenti.sort();
}

console.log(cognomiUtenti);

// stampiamo l'output di nome e posizione "umana"