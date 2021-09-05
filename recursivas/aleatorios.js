function radomWholeNum() {
      return Math.floor(Math.random() * 10)
  }
var teste = radomWholeNum()
for (teste > 0; teste < 1; teste++) {
    var teste = radomWholeNum()
}
console.log(teste)

console.log("---------")
function intervalo(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(intervalo(30,50))