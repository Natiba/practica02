/*
13. Segundos a horas, minutos y segundos
Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)
*/

// ver explicacion en js folder

let numberMul = parseInt(prompt("Enter a number, please"))

const outputSec = document.getElementById('seconds');

function convert(numberMul) {

  const seconds = (Math.round(numberMul % 0x3C)).toString();
  const hours    = (Math.floor(numberMul / 0xE10)).toString();
  const minutes  = (Math.floor(numberMul / 0x3C ) % 0x3C).toString();
      let time = [hours, minutes, seconds];
      for (i=0; i<time.length; i++) {
        console.log(time[i]);
    }
   outputSec.innerHTML = `<b>${numberMul} seconds</b> = ${hours} hours, ${minutes} minutes y ${seconds} seconds.`;
      
}

convert(numberMul);




