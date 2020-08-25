// Chiedere all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
// inserirlo in un array con altri cognomi
var arrayCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
arrayCognomi.push(cognomeUtente);
arrayCognomi = arrayCognomi.map(function(x){ return x.toUpperCase() })


// stampa la lista ordinata alfabeticamente

for (i=0; i<arrayCognomi.length; i++) {
  var stampaCognome = document.getElementById("lista_cognomi").innerHTML ;
  document.getElementById("lista_cognomi").innerHTML = stampaCognome + "<li>" + arrayCognomi.sort()[i] + "</li>" ;
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var trovaCognome = false ;

for (i=0; i<arrayCognomi.length; i++) {
  if (arrayCognomi[i] == cognomeUtente) {
    trovaCognome:true;
  }
}

document.getElementById("posizione_cognome").innerHTML ="La posizione del tuo cognome nella lista si trova al numero: " + arrayCognomi.indexOf(cognomeUtente);
