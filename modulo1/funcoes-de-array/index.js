// EXERCICIOS DE INTERPRETAÇÃO



/*  1 - A)  
R: vai imprimir os objetos que são 3 e as informações dentro deles que e o array principal  */


  /*   2 - A) 
R: um array com os nomes dos objetos. */


/*     3 - A)
R:  dos dois objetos com os apelidos diferentes de "Chijo", contendo os nomes e apelidos.











//  EXERCICIO DE ESCRITA




/*  1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter: */



/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]  */


/*  a) Crie um novo array que contenha apenas o nome dos doguinhos */
/* 
  const nomeDosDoguinhos = pets.map((pet) => {
      return pet.nome

  })
 console.log(nomeDosDoguinhos)

 */


/* b) Crie um novo array apenas com os [cachorros salsicha] */

/* const cachorrosSalsichas = pets.filter((pet) => {
    return pet.raca === "Salsicha"

})
console.log(cachorrosSalsichas)
 */

/* c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */


/*  const poodle = pets.filter((pet) =>{
    return pet.raca === "Poodle"
}
)
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",poodle) 
 */





/* 2 - Dado o seguinte array de produtos, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter: */

/*  const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 } 
 
 ]
 */
 /* a) Crie um novo array que contenha apenas o nome de cada item */

 /* const nomesProdutos = produtos.map((produto) => {
     return produto.nome

 })
console.log(nomesProdutos)
 */


/* b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles */

  /*   const arrayComNomes = produtos.map((produto) => {
      return produto.nome
      
  }
  )
 console.log(arrayComNomes)


 const arrayComPrecos = produtos.map((produto,indice,array) => {
     let precoOriginal = produto.preco
     let  precoComDesconto = precoOriginal *0.05 
     precoOriginal = precoOriginal*0.95
     produto.preco = produto.preco - precoComDesconto
   
     return   {nome:produto.nome, preco:(produto.preco).toFixed(2)}
 }
 )
 console.log(arrayComPrecos)  */


 






/* c) Crie um novo array que contenha apenas os objetos da categoria Bebidas */

/*  const bebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"

})
console.log(bebidas) */
 

/* d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê" */

/*  const produtosLimpezaYpe = produtos.filter((produto) =>{
     return produto.nome.includes("Ypê")
 })

 console.log(produtosLimpezaYpe) */


/* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */


/* const compras = produtosLimpezaYpe.map((produto,indice,array) =>{
    return `compra ${produto.nome} por,${produto.preco} `
})

console.log(compras) */