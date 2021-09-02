var check = document.querySelector('input#check')
check.addEventListener('click', click)

function click() {
    var nac = document.querySelector('input#nac')
    var vNac = String(nac.value.toLowerCase())
    var res = document.querySelector('div#Res')
    var cmd = document.querySelector('div#Cmd')

    if (vNac == "brasil") {
        res.innerHTML = `Sua nacionalidade é Brasileira.`
        cmd.innerHTML = `Seja Bem-Vindo`
    } else {
        res.innerHTML = `Você é estrangeiro.`
        cmd.innerHTML = `Seja Bem-Vindo, passe pela Imigração`
    }
}