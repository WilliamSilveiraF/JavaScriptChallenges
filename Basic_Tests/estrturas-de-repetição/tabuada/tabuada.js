var botao = document.querySelector('input#botao')
botao.addEventListener('click', tabuada)

function tabuada() {
    var n = document.querySelector('input#txtN')
    var tab = document.querySelector('select#seltab')
    tab.innerHTML = ``
    if (n.value.length == 0) {
        window.alert("Por favor, digite um número")
    } else {
        var nN = Number(n.value)
        var c = 1
        for (c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${nN} x ${c} = ${nN*c}`
            tab.appendChild(item)
        }
    }
}