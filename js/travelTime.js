/*
8.Tiempo de viaje
Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).
*/

let userDistance = parseInt(prompt("Enter the distance of your trip, please"));

// km / veloc = hs

const byFoot = 5; // veloc 
const byBus = 45;
const byBike = 10;
const byCar = 60;

let transports = [byFoot, byBus, byBike, byCar];

let multy = transports.map(item => userDistance / item);
console.log(multy);

const hourToMinute =(x) => {
  return x * 60;
}

hourToMinute();

const footToHour = hourToMinute(multy[0]);
console.log(footToHour);
const busToHour = hourToMinute(multy[1]);
console.log(busToHour);
const bikeToHour = hourToMinute(multy[2]);
console.log(bikeToHour);
const carToHour = hourToMinute(multy[3]);
console.log(carToHour);

// ver como poner si es menos de 60, la palabra 'minutes', si es 60: '1 hour', si es multiplo de 60: 'hours' y si es mas de 60 pero no multiplo: x 'hours' y x 'minutes'

const time = (document.querySelector("#travel").innerHTML = `
To do <b>${userDistance}</b> kilometers <b>by Foot</b> 🚶‍♀️🚶 you will take: <span>${multy[0]} hours</span> (<b>${footToHour} minutes)</b><br>
To do <b>${userDistance}</b> kilometers <b>by Bus</b> 🚌 you will take: <span>${multy[1]} hours</span> (<b>${busToHour} minutes)</b><br>
To do <b>${userDistance}</b> kilometers <b>by Bicycle</b> 🚴‍♀️🚴 you will take: <span>${multy[2]} hours</span> (<b>${bikeToHour} minutes)</b><br>
To do <b>${userDistance}</b> kilometers <b>by Car</b> 🚙 you will take: <span>${multy[3]} hours</span> (<b>${carToHour} minutes)</b>
`);
