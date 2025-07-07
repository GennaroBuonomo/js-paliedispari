const parolautente = prompt("Inserisci una parola")

function ispalindroma(parola){
  const parolaminuscola = parola.toLowerCase();
  const parolainvertita = parolaminuscola.split("").reverse().join("");
  return parolaminuscola === parolainvertita;
}

if(ispalindroma(parolautente)) {
  console.log(`La parola ${parolautente} si è palindroma`);
} else {
console.log(`La parola ${parolautente} non è palindroma`);
}

//Pari e Dispari

const sceltautente = prompt("Segli: pari o dispari");

const numeroutente = parseInt(prompt("inserisci un numero da 1 a 5"));

if (numeroutente < 1 || numeroutente > 5 || isNaN(numeroutente)) {
  console.log("Numero non valido, inserisci un numero da 1 a 5");
} else {
  function numerorandom() {
   return Math.floor(Math.random() * 5) + 1;
  }

  const numerocomputer = numerorandom();
  console.log(`La somma è ${somma}`);

  function ispari(numero) {
    return numero % 2 === 0;
  }

  const risultatopari = ispari(somma);
  if(
    (risultatopari && sceltautente === "pari") || (!risultatopari && sceltautente === "dispari")
  ){
    console.log("Hai vinto");
  } else {
    console.log("Hai perso");
  }
}
