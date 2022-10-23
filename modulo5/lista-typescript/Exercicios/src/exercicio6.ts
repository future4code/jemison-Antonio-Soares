type Clientes = {
    cliente: string
    saldoTotal: number
    debitos: number[]
}
let clientes: Clientes[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const Devedor = ((array: Clientes[]): any => {

    let newClientes: Clientes[] = array.map((devedor) => {

        let valorDebito: number = devedor.debitos.reduce((a: number, b: number): number => a + b, 0)

        return { cliente: devedor.cliente, saldoTotal: (devedor.saldoTotal - valorDebito), debitos: [] }

    }).filter((clienteDevedor) => {
        return clienteDevedor.saldoTotal < 0
    })
    return newClientes
})

console.log(Devedor(clientes))