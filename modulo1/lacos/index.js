
// EXERCICIO DE INTERPRETAÇÃO

// 1 - somando os valo da variavel "valor" com o "i", resultado 10 

/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
 */




// 2 
// a- sera impreso numeros maiores que 18
// b - sim seria o sufuciente podedia usar a essa base ( `O elemento do índex ${i} é ${lista[i]} )




// 3 NAO COMPRENDI 100% MESMO EXECUTANDO O COD

/* *
**
***
****
 */














// EXERCICIOS DE ESCRITA 








/* 1. EXECUTADO.

Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console


 
  
/*  let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de Estimação você tem?"))
     

 if (bichinhosDeEstimacao === 0 ){
     console.log("Que pena! Você pode adotar um pet!")
 }
  else {
      let quantidadeDeBichinhos=0
      let nomesDosBichinhos = []
      while (quantidadeDeBichinhos < bichinhosDeEstimacao){
          let todosOsNomes = prompt("Digite os nomes deles")
          nomesDosBichinhos = todosOsNomes
          quantidadeDeBichinhos = quantidadeDeBichinhos + 1


          console.log(nomesDosBichinhos)
          
      }
  }
 */









/*  2. EXECUTADO.

Considere que você tenha acesso a um `array` 
 (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
 crie uma função para cada um dos itens abaixo, realizando as operações pedidas: */
    
 /*  let arrayOriginal = [ 10 , 21 , 30 , 40 , 50 ] */


    /* a) Escreva um programa que **imprime** cada um dos valores do array original. */
    
 /*  for(numerosArray of arrayOriginal){
      console.log(numerosArray)

  }
    */

  /*   b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10 */
    
/*   for(numerosArray of arrayOriginal){
    console.log(numerosArray / 10 )
} */
  

    /* c) Escreva um programa que **crie** um novo array contendo, somente, 
    os números pares do array original e **imprima** esse novo array */
    
  /* for(let i = 0 ; i <= 5 ; i++){
      let pares= (arrayOriginal[i] % 2 )
      if (pares === 0 ){
          console.log([arrayOriginal[i]])
        }
    
    }
   */
 

  /*   d) Escreva um programa que **crie** um novo array contendo strings, 
    da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array. */
    
/* 
  for(i=0 ; i < 5 ; i++){
     let arrayString = `O elemento do índex ${i} é ${arrayOriginal[i]}`
     console.log(arrayString) 
 } */



   /*  e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

/* function maiorNumero(arrayOriginal){
      let maior = 0
      let elemento = 0
    for(let i = 0; i <5 ; i++){
      elemento =arrayOriginal[i]
       if( elemento > maior){
           maior = elemento
       }
    }  
  return maior
}

 console.log(maiorNumero(arrayOriginal)) */


 //  MENOR - O MEU MENOR ESTA SENDO ZERO, MAIS DEVERIA SER O 10, NÃO SEI PROCEGUIR COM O COD.
 
 /* function menorNumero(arrayOriginal){
      let menor = 0
      let elemento = 0
    for(let i = 0; i < 5 ; i++){
      elemento = arrayOriginal[i]
       if( elemento < menor  ){
           menor = elemento
       }
    }  
  return menor
}

 console.log(menorNumero(arrayOriginal))

 */





  