const funcAux = {
    //Confirma se o número é múltiplo de todas as bases divisoras
    todosSaoMultiplos: function(umNumero, arrDivisores) {
        let saoMultiplos = arrDivisores.filter(base => umNumero % base == 0);
        return saoMultiplos.length == arrDivisores.length 
    },
    //Acha o todos os números entre (1, 50), output = [1, 2, 3, ..., 50]
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

function menorNumDivisivelPorTodos(frst, last) {
    let intervalo = funcAux.acheIntervalo(frst, last);
    num = 1;
    while (!funcAux.todosSaoMultiplos(num, intervalo)) {
        num++;
    }
    return `Entre o intervalo ${frst} e ${last}, o menor número divisível por todos é ${num}`;
}
console.log(menorNumDivisivelPorTodos(1, 20))