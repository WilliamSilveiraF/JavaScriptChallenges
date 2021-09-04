var adicionarBtn = document.querySelector('input#adicionarBtn')
adicionarBtn.addEventListener('click', Clicou)
var myArray = []

var numberBox = document.querySelector('input#numberBox')

function Clicou() {
    var numberBoxN = Number(numberBox.value)
    var resultBox = document.querySelector('select#resultBox')
    
    
    if (1 > numberBoxN || 100 < numberBoxN) {

        window.alert("Digite um número entre 1 e 100")

    } else if (myArray.includes(numberBoxN)) {

        window.alert("Isso já foi escrito")

    } else {

        myArray.push(numberBoxN)
        var itemEscrito = document.createElement('option')
        itemEscrito.text = `${numberBoxN} foi adicionado`
        resultBox.appendChild(itemEscrito) 
        numberBox.value = ''
    }
    console.log(myArray)
}

var finalizarBtn = document.querySelector('input#finalizarBtn')
finalizarBtn.addEventListener('click', Finalizou)

function Finalizou() {
    var resTotal = document.querySelector('p#resTotal')

    if (myArray.length == 0) {
        window.alert("Adicione números")
        resTotal.innerHTML = ``
    } else {
    
    myArray.sort(function(a, b){return a-b})

    var myArraySum = myArray.reduce((a, b) => a + b, 0)
    var myArrayMedia = myArraySum / myArray.length
    
    resTotal.innerHTML = 
    `Ao todo, temos ${myArray.length} números cadastrados.<br>
    O maior valor informado foi ${myArray.slice(-1)[0]}<br>
    O menor valor informado foi ${myArray[0]}<br>
    Somando todos os valores, temos ${myArraySum}<br>
    A média dos valores digitados é ${myArrayMedia}`
    }
    myArray = []


    resultBox.innerHTML = ``
}