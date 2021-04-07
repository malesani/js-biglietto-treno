/* dati inseriti */
var nome = prompt("come ti chiami?")
var km = prompt ("dimmi quanti km vuoi fare");
if(km < 0){
  alert('Error')
}
var età = prompt ("quanti anni hai?");

console.log(nome);
console.log(km);
console.log(età);

/* regole calcolo*/
var costo = km * 0.21;
var sconto_G = costo - (costo *(40/100));
var sconto_P = costo - (costo *(20/100));

console.log(costo);
console.log(sconto_G);
console.log(sconto_P);

/* risultato */
var trans;

if(età <=18){
  trans = sconto_P
}else if (età >=65){
  trans = sconto_G
}else {
  trans = costo
}

/* stampa */
var vizz = trans.toFixed(2);

document.getElementById('viaggio').innerHTML = "Ciao "+ nome + " il costo del viaggio, calcolando la percentuale di sconto in base alla tua etta nel caso tu compia i requisiti necesari sarà di " + vizz +" €";





