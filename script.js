// function calcular(){
//     let num = Number(window.prompt('digite um número:'))
//     let res = document.querySelector('section#result')
//     res.innerHTML = `<p>O número a ser
//     analisado aqui sera o <strong>${num}</strong><P>`

//     res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
//     res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
//     res.innerHTML += `<p>O valor inteiro mais proximo é ${Math.round(num)}</p>`
//     res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
//     res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>`
//     res.innerHTML += `<p>O valor de ${num} <sup>2</sup> é
//     ${Math.pow(num, 2)}</p>`
//     res.innerHTML += `<p>O valor de ${num} <sup>3</p> é
//     ${Math.pow(num, 3)}</p>`
      
// } 


// let contador = 0
// let res = document.querySelector('section#result')


// function contar(){
//     contador ++
//     res.innerHTML = `<p>contagem: ${contador}</p>`

// }
// function zerar() {
//     contdor = 0
//     res.innerHTML = null
// }

 
  function calculo(){
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)

    document.querySelector('#result').innerHTML =
    `a soma de <mark> ${a} + $ {b} </mark> divido por
    ${c} é igual a : ${(a+b)/c}`

  }
  


















































  

  let i = 0
for (i = 0; i < 100; i++){
  alert('')
}