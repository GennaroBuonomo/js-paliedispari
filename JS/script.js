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

