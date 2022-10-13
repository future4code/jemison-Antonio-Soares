const adicionarTarefas = process.argv[2]
const tarefas = [
  "Lavar o Banheiro",
   "Lavar Roupas",


]


tarefas.push(adicionarTarefas)

console.table(tarefas)