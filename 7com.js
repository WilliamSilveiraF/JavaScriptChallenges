const todosSaoMultiplos = function(multiplo, arrDeBases) {
    return arrDeBases.filter(item => multiplo % item == 0).length == arrDeBases.length
}
const acheIntervalo = function(x, y) {
    let maior = y > x ? y : x;
    let menor = y == maior ? x : y 
    
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
    while (!todosSaoMultiplos(num, intervalo)) {
        num++;
    }
    return num;
}
console.log(ehMultiplo(1, 10))
