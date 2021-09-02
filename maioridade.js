var idade = 80
if (idade <= 15) {
    console.log("Não Vota")
} else if (idade < 18 || idade >= 65) {
    console.log("Voto Opcional")
} else {
    console.log("Voto Obrigatório")
}

var agora = new Date()
var hora = agora.getHours()

if (hora <=23) {
    console.log(`Agora são ${hora} horas.`)
} else {
    console.log(`Horário Inválido`)
}

if (hora < 6) {
    console.log("Boa Madrugada :)")
} else if (hora < 12) {
    console.log("Bom Dia")
} else if (hora < 18) {
    console.log("Boa Tarde")
} else if (hora <= 23 ) {
    console.log ("Boa Noite")
} else {
    console.log ("Hora Inválida")
}

var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia Inválido')
}
