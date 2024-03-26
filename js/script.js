const sendbtn = document.getElementById ("send-btn");
console.log (sendbtn, typeof sendbtn)


sendbtn.addEventListener("click", function()  {

const age = parseInt(document.getElementById("age").value); // number
console.log (age, typeof age)


const numberskm = parseInt (document.getElementById("numberskm").value); // number
console.log (numberskm , typeof numberskm)



const conversione= 21 / (100);
// costante prezzo prezzo al km
console.log( conversione, typeof conversione);

// variabile prezzi e prezzi scontati
let prezzo = numberskm * conversione;
let prezzo20 = prezzo * (80/100)  
let prezzo40 = prezzo * (60/100)
// condizioni di funzionamento
// aggiunta di tofixed2 per ridurre a due e indicare i centesimi
if (age < 18){
console.log( prezzo20.toFixed(2), typeof prezzo20); 
document.getElementById("prezzofinale").innerHTML = prezzo20.toFixed(2);
}
else if (age>=18&& age<65){
console.log( prezzo.toFixed(2), typeof prezzo); 
document.getElementById("prezzofinale").innerHTML = prezzo.toFixed(2);

}
else {
console.log( prezzo40.toFixed(2), typeof prezzo40); 
document.getElementById("prezzofinale").innerHTML = prezzo40.toFixed(2);
}
// fine condizioni


})










