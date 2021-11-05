var Clicou = document.querySelector('input#Clicou')
Clicou.addEventListener('click', Calcule)


function Calcule() {
    var data = new Date()

    var anoFinal = data.getFullYear()

    var anoNascimento = document.querySelector('input#txtano')

    var idade = anoFinal - Number(anoNascimento.value)

    var res = document.querySelector('p#idade')

    var fsex = document.getElementsByName('radsex')

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoFinal) {
        window.alert('erro')
    } else {
        var genero = ''

        var imgPerson = document.querySelector('div#imgPerson')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade < 21) {
                //homem abaixo de 21
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/homem16anos.jpg)'
            } else if (idade < 50) {
                //homem abaixo dos 50
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/homem35anos.jpg)'
            } else {
                //homem abaixo dos 100
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/homem65anos.jpg)'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade < 21) {
                //Mulher abaixo de 21
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/mulher16anos.jpg)'
            } else if (idade < 50) {
                //Mulher abaixo dos 50
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/mulher35anos.jpg)'
            } else {
                //Mulher abaixo dos 100
                imgPerson.style.backgroundImage = 'url(/verificadordeidade/images/mulher65anos.jpg)'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
