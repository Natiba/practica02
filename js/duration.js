/*
9. Duración vuelo
Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.
*/

let destiny1 = prompt('Please, enter the destination of your flight (ej: Bcn)');
let destiny2 = prompt('Please, enter the destination of your flight (ej: Paris)'); 
let destiny3 = prompt('Please, enter the destination of your flight (ej: Miami)');

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
let destinyCap1 = capitalizeFirstLetter(destiny1);
let destinyCap2 = capitalizeFirstLetter(destiny2);
let destinyCap3 = capitalizeFirstLetter(destiny3);

let duration1 = parseInt(prompt('Please, enter the duration of the first destiny (in hours)'));
let duration2 = parseInt(prompt('Please, enter the duration of the second destiny (in hours)'));
let duration3 = parseInt(prompt('Please, enter the duration of the third destiny (in hours)'));

let totalFlights = duration1 + duration2 + duration3;
console.log(totalFlights);

let duration = document.getElementById('duration').innerHTML = `
Your first destiny is <b>${destinyCap1}</b> and it's duration is ${duration1} hours. <br>
Your second destiny is <b>${destinyCap2}</b> and it's duration is ${duration2} hours. <br>
Your third destiny is <b>${destinyCap3}</b> and it's duration is ${duration3} hours.
`

let total = document.getElementById('totDuration').innerHTML = `
✈️ The total flight is <span>${totalFlights} hours</span> and your destination scales are  <b>${destinyCap1}, ${destinyCap2}</b> and <b>${destinyCap3}</b>
`
