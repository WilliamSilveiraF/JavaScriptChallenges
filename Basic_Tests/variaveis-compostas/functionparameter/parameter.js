function parImpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return "Ímpar!"
    }
}
let res = parImpar(4)
console.log(parImpar(-3))

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 5))