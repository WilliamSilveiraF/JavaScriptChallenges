var botao = document.querySelector('input#botao')
botao.addEventListener('click', Clicou)

function Clicou() {
    res.innerHTML = ``
    var start = document.querySelector('input#start')

    var end = document.querySelector('input#end')

    var step = document.querySelector('input#step')

    //var difr = endN - startN

    res = document.querySelector('p#res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = "Preencha todas as lacunas"
    } else {

    var startN = Number(start.value)
    var endN = Number(end.value)
    var stepN = Number(step.value)
    if (stepN <= 0) {
        window.alert("Passo inválido! Considerando PASSO 1")
        stepN = 1
    }
    if (startN > endN) {
        //Break Point
        for (startN > endN; startN >= endN; startN -= stepN) {
            res.innerHTML += `${startN} 👉`
        }
    } else {
        for (startN < endN; startN <= endN; startN += stepN) {
        res.innerHTML += `${startN} 👉`
        }
        
        }
        res.innerHTML += `🏁`
    }
}
