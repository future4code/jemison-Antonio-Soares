// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
 return array.length
}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}


// EXERCÍCIO 03
 function retornaArrayOrdenado(array) {
     return array.sort((a,b) =>{
     if(a>b) return 1;
     if(a<b) return -1;
     return 0 ;

    })  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   return array.filter(arrays =>{
       return ((arrays %2 ===0 ))
   })
   
   }




// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par =  array.filter(arrays =>{
        return ((arrays %2 ===0 ))

    })
 let aoQuadrado = par.map(par =>{
     return Math.pow(par,2)
 })

 return aoQuadrado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    let i = 0
    let maior = - Infinity
    while(i<array.length){
        if(array[i]>maior){
            maior = array[i]

        }
        i++
    
    }

     return maior 

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 
    function maiorNumero(){
        if(num1>=num2){
            return num1 
        }
        else if (num2>=num1){
            return num2
        }
    }

          function divisivel(){
          if(num2 % num1 === 0){
          variavelMaiorDivisivelPorMenor = true
         }
          else{
           variavelMaiorDivisivelPorMenor = false
         }
           return variavelMaiorDivisivelPorMenor
}


function diferencaEntreNumeros(){
    let resuDiferente
 if(num1>num2){
     resuDiferente = num1 - num2 
 }
 else{
     resuDiferente = num2 - num1 
 }

 return resuDiferente
}

let Objeto = {
    maiorNumero:maiorNumero(),
    maiorDivisivelPorMenor:divisivel(),
    diferenca:diferencaEntreNumeros()
}

return Objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
   
   let Pares = [];
    for (let i = 0; Pares.length < n; i++) {
        if (i % 2 == 0) {
            Pares.push(i)
        }
    }
    return Pares
}





// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   
        if( (ladoA==ladoB) && (ladoB==ladoC)) {
            return"Equilátero"
        } 
            
        else if((ladoA!=ladoB) && (ladoA!=ladoC) && (ladoB!=ladoC)){
            return"Escaleno"
        }
            
        else{
            return"Isósceles"
        }
            




}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
    let novoArray = []
    array.sort((a,b) => a-b)
    novoArray.push(array[array.length - 2])
    novoArray.push(array[1])
    return novoArray

 


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
   let nomeDofilme=filme.nome;
  let anoDoFilme=filme.ano;
  let diretorDofilme= filme.diretor;
  let atores = [filme.atores.join(`, `)]; 

  return `Venha assistir ao filme ${nomeDofilme}, de ${anoDoFilme}, dirigido por ${diretorDofilme} e estrelado por ${atores}.`


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
const pessoasAnonimas = {
    ... pessoa,
    nome:"ANÔNIMO"
}
 return pessoasAnonimas


}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((pessoas) => {

    return (pessoas.idade > 14 && pessoas.idade <60 && pessoas.altura > 1.5)
   })
  
}





// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    return pessoas.filter((pessoas) => {

        return !(pessoas.idade > 14 && pessoas.idade <60 && pessoas.altura > 1.5)
       })
      

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let i = 0; i < contas.length; i ++){
        let entradas = [];
        calcularSaldo(contas);
        function calcularSaldo(utilizador){
          utilizador[i].compras.forEach(nr => entradas.push(nr * -1));
          
      }
      function somaNumeros(numeros){
        return numeros.reduce((sum, nr)=> sum +nr, 0);
      }
    contas[i].compras =[]
    contas[i].saldoTotal += somaNumeros(entradas)  
    }
      return contas
}





// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b) {
        if(a.nome < b.nome) {
          return -1;
        } else {
          return true;
        }
      })

 return consultas 

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

return consultas.sort((a,b)=> {
    let datacom1 = a.dataDaConsulta.split("/")
    let datacom2 = b.dataDaConsulta.split("/")
    let newData1 = new Date([datacom1[2]],[datacom1[1]], [datacom1[0]])
    let newData2 = new Date([datacom2[2]],[datacom2[1]], [datacom2[0]])


    if(newData1>newData2) return 1;
    if(newData1<newData2) return -1;
   
    return 0
     })
    
    
    
    }