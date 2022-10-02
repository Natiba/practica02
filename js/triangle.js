/*
5. Área de un triangulo
Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.
*/

let userBase = parseInt(prompt("Enter a number for the base of your triangle"));
console.log(typeof userBase === "number")
let userHeight = parseInt(prompt("Enter a number for the height of your triangle"));
console.log(typeof userHeight === "number")

function area (base, height) {
    return base * height / 2;
}

area()

let showArea = document.querySelector("#triangle").innerHTML=`
The base of your triangle is: <b>${userBase}</b>, the height of your triangle is: <b>${userHeight}</b> and the AREA of your triangle is: <span>${area(userBase, userHeight)}</span>
`