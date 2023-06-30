// Dichiarazione Variabili e Costanti
const kilometers = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = ` ${currentDay}/${currentMonth}/${currentYear} `

// Validazione dati inseriti
if (isNaN(kilometers) || kilometers <= 0 || isNaN(userAge)) {
    alert("Ricarica la pagina e inserisci dei dati validi");
}

document.getElementById("date").innerHTML = `${currentDate}`

// Calcolo kilometri * prezzo al kilometro
const kmPrice = kilometers * 0.21;

// Blocco IF che in base all'età inserita calcola eventuali sconti
if (userAge >= 65) {
    const price = kmPrice - (kmPrice * 0.4);
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}
else if (userAge >= 18) {
    document.getElementById("age").innerHTML = "Adulto"
    const price = kmPrice;
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}
else {
    document.getElementById("age").innerHTML = "Bambino"
    const price = kmPrice - (kmPrice * 0.2);
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}