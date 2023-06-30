const kilometers = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = ` ${currentDay}/${currentMonth}/${currentYear} `

document.getElementById("date").innerHTML = `${currentDate}`


const kmPrice = kilometers * 0.21;

if (userAge >= 18) {
    document.getElementById("age").innerHTML = "Adulto"
    const price = kmPrice;
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}
else if (userAge >= 65) {
    const price = kmPrice - (kmPrice * 0.4);
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}
else {
    document.getElementById("age").innerHTML = "Bambino"
    const price = kmPrice - (kmPrice * 0.2);
    const priceFix = price.toFixed(2);
    document.getElementById("price").innerHTML = `${priceFix}€`
}