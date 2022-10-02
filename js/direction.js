/* 
Dirección completa
Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
*/

let street = prompt("Enter your address, please");
let number = prompt("Enter your street number, please");
let dep = prompt("Enter your dept number, please").toLocaleUpperCase();
let zipCode = prompt("Enter your zip code, please");
let city = prompt("Enter your city, please").toLocaleUpperCase();
let country = prompt("Enter your country, please");

let capitalizeAll = [street, country];
const capAll = capitalizeAll.map((e) => e.charAt(0).toUpperCase() + e.slice(1) );

capAll;

let answer = document.getElementById("address").innerHTML = `
"The address you entered is: Street ${capAll[0]} ${number} ${dep}, ${zipCode}, ${city}, ${capAll[1]}"
`