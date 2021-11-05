var dadosHora = new Date()
var hora = dadosHora.getHours()

var mostreHora = document.querySelector('span#mostreHora')
mostreHora.innerHTML = `${hora} horas`

var mudeImg = document.querySelector('div#imgCircle')
var mudeMain = document.querySelector('main')

if (hora <= 1) {
    mudeImg.style.backgroundImage = 'url(/relogio/imagens/boamadrugada.jpg)'
    mudeMain.style.backgroundColor = 'gray'
    mostreHora.innerHTML = `${hora} hora, Madrugando einn`

} else if (hora < 6) {
    mudeImg.style.backgroundImage = 'url(/relogio/imagens/boamadrugada.jpg)'
    mostreHora.innerHTML = `${hora} horas, Madrugando einn`
    mudeMain.style.backgroundColor = 'gray'

} else if (hora < 12) {
    mudeMain.style.backgroundColor = 'gray'
    mudeImg.style.backgroundImage = 'url(/relogio/imagens/bomdia.jpg)'
    mostreHora.innerHTML = `${hora} horas, Bom dia`

} else if (hora < 18) {
    mudeMain.style.backgroundColor = 'orange'
    mudeImg.style.backgroundImage = 'url(/relogio/imagens/boatarde.jpg)'
    mostreHora.innerHTML = `${hora} horas, Boa Tarde`

} else if (hora <=23) {
    mudeMain.style.backgroundColor = 'darkBlue'
    mudeImg.style.backgroundImage = 'url(/relogio/imagens/boanoite.jpg)'
    mostreHora.innerHTML = `${hora} horas, Boa Noite`
    
} else {
    mostreHora.innerHTML = `[Hora Inválida]`
}