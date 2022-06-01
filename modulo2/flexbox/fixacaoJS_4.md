``` function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
``` 
``` let xVezes = 0
```  for(i=0 ; i< arrayDeNumeros.length; i++){
```   if(arrayDeNumeros[i] === numeroEscolhido){
```   xVezes++ }
```  }
  
```  if(xVezes > 0){
```   return `O número ${numeroEscolhido} aparece ${xVezes}x`
```  }
  
```  else{ 
```    return "Número não encontrado"
```   }

```  }

