//declarando date
let data1 =new Date()
document.write(data1);
document.write("<br></br>")

//declarando somente o dia 
let data2 =new Date().getDate()
document.write(data2)
document.write("<br></br>")

//pega o dia com o 0 na frente
let data3 =new Date().getDate()
document.write(('0' + data3).slice(0-2))
document.write("<br></br>")

//pega o mês (começa no zero, entao precisa colocar +1 pra 
//ficar no mes certo)
let data4 =new Date().getMonth() +1
document.write(data4)
document.write("<br></br>")

//pega o ano
let data5 =new Date().getFullYear()
document.write(data5)
document.write("<br></br>")

//pega o dia da semana 
let data6 =new Date()
let diasSemana= ['Domingo', 'Segunda-Feira', 'Terça-Feira', 
'Quarta-Feira','Quinta-Feira','Sexta-Feira', 'Sábado']
document.write(diasSemana[data6.getDay()])
document.write("<br></br>")

//formatação completa de data
let data7 =new Date ()
let dia =(("0" +data7.getDate()).slice(0-2))
let mes = data7.getMonth()
let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let ano = data7.getFullYear()
document.write(dia + " de " + meses[mes] + " de " + ano);