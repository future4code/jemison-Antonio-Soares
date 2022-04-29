// EXERCICIOS DE INTERPRETAÇÃO

// . 1 

/* a) Explique o que o código faz. Qual o teste que ele realiza? 
 R: O CODIGO ESTA VENDENDO SE O NUMERO QUE O USUARIO ESTA COLOCANDO E 
 DIVIDO POR 2 E SE A RESTO DESSA DIVISAO ," VER SE O NUMERO E PAR"


b) Para que tipos de números ele imprime no console "Passou no teste"? 
 R: NUMEROS PARES

c) Para que tipos de números a mensagem é "Não passou no teste"?
R: NUMEROS IMPARES
 */



// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

/* a) Para que serve o código acima?
R: SERVE PARA LOCALIZAR OS PREÇOS DAS FRUTAS 

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: o preço da fruta Maçã é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` 
que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R:A MENSSAGEM IMPRESA NO CONSOLE SERA "o preço da fruta Pêra é R$ 5.5", O BREAK ESTA COM AS DUAS BARRA
"//" ENTAO ELE E UM COMENTARIO.

 */




// 3.

/* a) O que a primeira linha está fazendo?
R:PEDINDO AO USUARIO QUE DIGITE UM NUMERO



b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R:"Esse número passou no teste"


c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
R:SIM HAVERA ERROS, 
1- a variavel "mensagem" esta dentro do "if" entao ela esta fora do escopo, de onde ela 
deveria estar,sendo assim o console dala não vai executar.
2- deveria colocar a comparacao ">=" caso o usuario coloque o numero "0" por que iria ter a 
comparação de igualdade.

 */







// EXERCICIO DE ESCRITA 

 /* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se 
   ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima 
    que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
    caso contrário, imprima `"Você não pode dirigir."` */
  

   /*  let idade = Number(prompt("Digite a Sua Idade!"))
     
    function podeOuNaoDirigir (idade) {
        if (idade >= 18) {
            return "Você pode Dirigir"
        }
        else{
            return "Você não pode Dirigir"
        }

    }
    console.log(podeOuNaoDirigir(idade)) */



 /* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
 Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem 
    "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else. */


 /* let turno = prompt("Qual turno você estuda M-(matutino),V-(vespertino) ou N-(noturno).").toLowerCase()
   
  function qualeoTurno (turno){
     
    if(turno === "m"){
        return "Boa Dia!"
    }
    else if (turno === "v"){
        return "Boa Tarde!"
    }
    else {
        return "Bom Noite!"
    }

  }
  console.log(qualeoTurno(turno))
 */







  /*   3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */


  /*  let turno = prompt("Qual turno você estuda M-(matutino),V-(vespertino) ou N-(noturno).").toLowerCase()

    switch (turno){

        case "m":
            console.log( "Bom Dia!" )
            break
        
        case "v":
            console.log("Boa Tarde!")
            break
          
        case "n":
            console.log("Boa Noite!")
            break

        default:
            console.log("Digite somente a inicial do Seu Turno!!!") 

            
    }
 */
 





  /*  4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
  porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.

   Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
   outra pergunta sobre o preço do ingresso, 

   então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
  caso contrário, imprima "Escolha outro filme :(" */


/* let genero = prompt("Qual o Gênero do Filme ?").toLowerCase()
let precoIngreco =Number(prompt("Qual o Valor do Ingresso R$ ?"))


function vamosAssistir (genero,precoIngreco){

 if(genero !== "fantasia"){
     return "Escolha outro Filme :( !!!"
 }

 else if (precoIngreco !== 15 ){
 return "Escolha outro Filme :( !!!"
 }

 else if (precoIngreco === 15){
     return "BOM FILME !!!"
 }
 else if(genero ==="fantasia"){
     return "BOM FILME !!!"
 }
 else{
     return "Digite O Gênero novamente e o valor do ingresso"
 }


}

console.log(vamosAssistir(genero,precoIngreco)) */

