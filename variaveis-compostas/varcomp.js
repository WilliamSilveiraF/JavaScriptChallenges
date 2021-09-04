let num = [5, 8 , 300, 9 , 40]
console.log(`Nosso vetor é ${num}`)

num[3] = 6
console.log(`Nosso vetor agora ${num}`)

num.push(7)
console.log(`Acrescentei um valor ${num}`)

console.log(`O vetor agora tem ${num.length} posições`)

console.log(`O vetor da posição num[0] é ${num[5]}`)

console.log(`O meu vetor em ordem é ${num.sort()}`)

for (c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
for (c in num) {
    console.log(num[c])
}

console.log(`O meu elemento 7 está na posição ${num.indexOf(8)}`)