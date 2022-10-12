const numero1 = Number(process.argv[2])
const numero2 = Number(process.argv[3])

// SUBTRAÇÃO

function subtrair (numero1,numero2) {
    return numero1-numero2;
}

const respostaDaSubtracao = subtrair(numero1,numero2)


console.log(respostaDaSubtracao)