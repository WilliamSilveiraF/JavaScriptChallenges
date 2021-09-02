var check = document.querySelector('input#check')
check.addEventListener('click', calc)

function calc() {
    var txtv = document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    var res = document.querySelector('div#res')

    if (vel >= 60) {
    res.innerHTML = `Sua velocidade é de ${vel} Km/h, você foi multado!`
    } else {
    res.innerHTML = `Sua velocidade é de ${vel} Km/h, Boa Viagem`
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
}