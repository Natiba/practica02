/*
6.Perímetro de un rectángulo
Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.
*/

// perimeter = 2 * (base * height)

let userHeightPer = parseInt(prompt("Enter some height (number) for your rectangle"));
let userWidthPer = parseInt(prompt("Enter some width (different number) for your rectangle"));

const perimeter = (height, width) => {return 2 * (height * width)}
perimeter();

let yourPerimeter = document.querySelector("#perimeter").innerHTML=`
The height you entered is: <b>${userHeightPer}</b>, the width you entered is: <b>${userWidthPer}</b> and the perimeter for your rectangle is: <span>${perimeter(userHeightPer, userWidthPer)}</span>
`

