/*
7.Porcentaje
Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.
*/

let userNumber = parseInt(prompt("Enter a number, please"));
let userPercentage = parseInt(prompt("Enter a percentaje, please"));

const percentage = (number, percent) => {return (number * percent)/100}
percentage();

const message = document.querySelector("#percentage").innerHTML=`
Your number is: <b>${userNumber}</b>, your percentage number is: <b>${userPercentage}%</b>. The percentage of your number is: <span>${percentage(userNumber, userPercentage)} </span>
`