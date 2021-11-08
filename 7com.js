const ehMultiploDaBase = function(base, numero) {
    return numero % base == 0
}
const todosSaoMultiplos = function(multiplo, arrDeBases) {
    return arrDeBases.filter(item => multiplo % item == 0).length == arrDeBases.length
}
const acheIntervalo = function(x, y) {
    let menor, maior;
    if (x > y) {
        maior = x;
        menor = y;
    } else {
        maior = y;
        menor = x;
    }
    
    let arrayDeBases = [];
    while (maior >= menor) {
        arrayDeBases.push(menor);
        menor++;
    }
    return arrayDeBases;
}
function ehMultiplo(frst, last) {
    let intervalo = acheIntervalo(frst, last)

    num = 1;
    console.log(todosSaoMultiplos(num, intervalo))
    while (todosSaoMultiplos(num, intervalo) == false) {
        num++;
    }
    return num;
}
console.log(ehMultiplo(1, 20))
//console.log(todosSaoMultiplos(1, acheIntervalo(1, 10)))