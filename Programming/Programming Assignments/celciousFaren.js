function celsiusToFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}
let tempInC = 25;
let tempInF = celsiusToFahrenheit(tempInC);
console.log("Celsius:", tempInC);
console.log("Fahrenheit:", tempInF);