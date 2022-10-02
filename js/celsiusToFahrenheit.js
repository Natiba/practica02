/*
11. Celsius a Fahrenheit
Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.
*/

let celsius = parseInt(prompt("Enter some Celsius degrees number"));

const fahrenheit = (deg) => {
    return (deg * 1.8) + 32
}; // F = C x 1.8 + 32

fahrenheit(celsius);
    
let degOutput = document.querySelector("#degrees").innerHTML = `
You entered <b>${celsius}</b> Celsius degrees =  <span>${fahrenheit(celsius)} Farenheit degrees </span>
`
