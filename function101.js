let greetUser = function () {
    console.log("Hello")
}


greetUser();

let square = function(num) {
    console.log(num * num);
}
square(3);


const convertFahrenheitToCelsius = function(f){
    return (f - 32) * 1.8;
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68))