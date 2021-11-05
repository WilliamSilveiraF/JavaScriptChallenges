var n1 = 202.3
var decimal = n1.toFixed(2)
var virgparaponto = decimal.replace('.', ',')
var monetario = virgparaponto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})