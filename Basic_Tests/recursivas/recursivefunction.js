//Usando recursividade ao invés de Loops
//Loop
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

var modoloop = multiply([3, 5, 4], 2)
console.log(modoloop)

console.log("-----")
//Função Recursiva
function recursive(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return recursive(arr, n-1)* arr[n-1]
    }
}
var modorecursive = recursive([3, 5, 4], 2)
console.log(modorecursive)

console.log("-----")

//Função recursiva somando
function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
}
  var modorecsum = sum([3, 5, 4], 1)
  console.log(modorecsum) 