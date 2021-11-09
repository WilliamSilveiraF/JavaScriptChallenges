const funcAux = {
    todosSaoMultiplos: function(umNumero, arrDivisores) { 
        let saoMultiplos = arrDivisores.filter(base => umNumero % base == 0);
        return saoMultiplos.length == arrDivisores.length 
    },
    acheIntervalo: function(x, y) {
        let maior = y > x ? y : x;
        let menor = y == maior ? x : y 
        
        let intervaloCrescente = [];
        while (maior >= menor) {
            intervaloCrescente.push(menor);
            menor++;
        }
        return intervaloCrescente;
    }
}

function maiorNumDivisivelPorTodos(frst, last) {
    let intervalo = funcAux.acheIntervalo(frst, last);
    num = 1;
    while (!funcAux.todosSaoMultiplos(num, intervalo)) {
        num++;
    }
    return num;
}
console.log(maiorNumDivisivelPorTodos(1, 20))