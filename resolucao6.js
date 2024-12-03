// Escreva uma funcao que receba um valor booleano ou númerico. Se o parametro fornecido for booleano, o retorno da funcao devera ser inverso. Por exemplo, se a entrada for false, retornara true. Se o parametro for numerico, o retorno sera o numero inverso. Por exemplo, se for fornecido 1, o retorno sera -1. se o parametro de entrada nao for de nenhum dor tipos acima, retorne "booleano ou numero esperados, mas o parametro e do tipo ..."

// inverso(true) retornara false
// inverso("6") retornara booleano ou numero esperados, mas o parametro e do tipo string
// inverso(-2000) retornara 2000
// inverso('programacao') retornara booleano ou numeros, mas o parametro e do tipo string

function inverso(valor) {
  const tipo = typeof valor

  if(tipo == "boolean") return !valor
  else if (tipo == "number") return -valor
  else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(true))
console.log(inverso(9))
console.log(inverso(-8))
console.log(inverso(false))
