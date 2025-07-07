const parolautente = prompt("Inserisci una parola")

function ispalindroma(parola){
  const parolaminuscola = parola.toLowerCase();
  const parolainvertita = parolaminuscola.split("").reverse().join("");
  return parolaminuscola === parolainvertita;
}