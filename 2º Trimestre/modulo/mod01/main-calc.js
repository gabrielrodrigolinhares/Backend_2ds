const calc = require('./calc');

console.log(calc.soma(2, 3)); 
console.log(calc.subtracao(5, 2)); 
console.log(calc.multiplicacao(4, 6)); 
console.log(calc.divisao(10, 2)); 
console.log(calc.divisao(10, 0)); 
console.log(calc.calcular("somar", 7, 3)); 
console.log(calc.calcular("subtrair", 7, 3));
console.log(calc.calcular("multiplicar", 7, 3)); 
console.log(calc.calcular("dividir", 7, 3)); 
console.log(calc.calcular("dividir", 7, 0)); 
console.log(calc.calcular("modulo", 7, 3)); 
   