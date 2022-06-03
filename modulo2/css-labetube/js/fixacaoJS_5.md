```function criarArrayNomesAnimais() {
  ```  const animais = [
 ```     { nome: "Cachorro", classificacao: "mamífero" },
  ```    { nome: "Papagaio", classificacao: "ave" },
   ```   { nome: "Gato", classificacao: "mamífero" },
   ```   { nome: "Carpa", classificacao: "peixe" },
  ```    { nome: "Pomba", classificacao: "ave" }
  ```  ]
```
 ```const NomeAnimais = animais.map((elemento)=>{
  ``` return elemento.nome
 ```})
  ```    return NomeAnimais

```}