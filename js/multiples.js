/*
12. Múltiplos
Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO
*/

let numberOne = parseInt(prompt("Enter the first number, please"));
let numberTwo = parseInt(prompt("Enter the second number, please"));

function multiple() {
while (numberOne !== numberTwo) {
  if (numberOne % numberTwo === 0) {
    let multi = `<span>${numberOne} is multiple of ${numberTwo}</span>`;
    return multi;
  } else {
    let notMulti = `<span>${numberOne} is NOT multiple of ${numberTwo}</span>`
    return notMulti;
  }
}
}

const outputMult = document.querySelector("#multiples").innerHTML=`
You entered numbers <b>${numberOne}</b> and <b>${numberTwo}</b>. ${multiple()}.  
`

