function somar(n1, n2) {
    return n1 + n2;
}
function subtrair(n1, n2) {
    return n1 - n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}
function dividir(n1, n2) {
    if (n2 === 0) {
        return "Não é possível dividir por zero.";
    }
    return n1 / n2;
}
function calcular(operacao, n1, n2) {
    switch (operacao) {
        case "somar":
            return somar(n1, n2);
        case "subtrair":
            return subtrair(n1, n2);
        case "multiplicar":
            return multiplicar(n1, n2);
        case "dividir":
            return dividir(n1, n2);
        default:
            return "Operação inválida.";
    }
}

console.log(calcular("somar", 5, 3));   
console.log(calcular("subtrair", 5, 3));
console.log(calcular("multiplicar", 5, 3)); 
console.log(calcular("dividir", 5, 3));
console.log(calcular("dividir", 5, 2)); 
console.log(calcular("modulo", 5, 3));
module.exports = {
    soma: somar,
    subtracao: subtrair,
    multiplicacao: multiplicar,
    divisao: dividir,
    calcular: calcular
};
            