function somar() {
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número:`))   

    let res = document. querySelector(`section#res`)
    res.innerHTML = `<span> A soma entre ${n1} e ${n2}
    é igual a ${n1  +  n2}</span> `
}
function menos() {
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número:`))   

    let res = document. querySelector(`section#res`)
    res.innerHTML = `<span> menos entre ${n1} e ${n2}
    é igual a ${n1  -  n2}</span> `
}
function dividir() {
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número:`))   

    let res = document. querySelector(`section#res`)
    res.innerHTML = `<span> dividir entre ${n1} e ${n2}
    é igual a ${n1  /  n2}</span> `
}
function multiplicação() {
    let n1 = Number(window.prompt(`Digite um numero:`))
    let n2 = Number(window.prompt(`Digite outro número:`))   

    let res = document. querySelector(`section#res`)
    res.innerHTML = `<span> multiplicação entre ${n1} e ${n2}
    é igual a ${n1 * n2} </span> `
}

function media() {
    let nome = window.prompt("qual o seu nome")
    let n1 = Number(window.prompt('digite a primeira nota'))
    let n2 = Number(window.prompt('digite a outra primeira nota'))

    med = (n1 + n1)/2

    let msg 


    if (med>=5){
        msg='aprovado'

    } else{
        msg='reprovado'
    }

    let res = document.getElementById('siuacao')
    res.innerHTML='olá, ${nome}! sua média foi ${med}!'
    res.innerHTML='<p> A mensagens que temos é:
    <h1 styele ="color.red" ${msg}'


    let res=document.getElementById('situacao')
    res.innerHTML='olá,$(nome)! sua meédia foi $(medi)!'

    


}