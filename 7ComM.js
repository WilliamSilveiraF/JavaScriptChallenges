function menorNumDivisivelPorTodos(inicio, fim){
    var state = true
    let menorNum = 1
    while (state) {
        for(var x = inicio; x <= fim; x++) {
            if (menorNum % x != 0) {
                menorNum++
                break;
            } else if (x == fim) {
                state = false
                return menorNum
            }
        }
    }
}
console.log(menorNumDivisivelPorTodos(1, 23))