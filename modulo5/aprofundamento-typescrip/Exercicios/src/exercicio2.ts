const amostraDeIdades : number[] = [21, 18, 65, 44, 15, 18]

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )
    let soma = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    
    return estatisticas
}
console.log(obterEstatisticas(amostraDeIdades))