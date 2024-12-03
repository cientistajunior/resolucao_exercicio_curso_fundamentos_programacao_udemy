//----------------- Resultado esperado --------------------- 
// receberPrimeiroEUltimoElemento([7, 14, "olá"]) // retornará [7, 'Olá']
// receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]) // retornará [-100, 16]

//----------------- Resolucao 1 ---------------------

// function receberPrimeiroEUltimoElemento(elementos){
//   const indiceDoPrimeiroElemento = 0
//   const indiceDoUltimoElemento = elementos.length - 1
//   const primeiroElemento = elementos[indiceDoPrimeiroElemento]
//   const ultimoElemento = elementos[indiceDoUltimoElemento]

//   return [primeiroElemento, ultimoElemento]
// }

// console.log(receberPrimeiroEUltimoElemento([79, 14, 'teste', 'soneca', 87, 'jiu', 98]))

//----------------- Resolucao 2 ---------------------

// function receberPrimeiroEUltimoElemento(elementos) {
//   const primeiroElemento = elementos.shift()
//   const ultimoElemento = elementos.pop()

//   return [primeiroElemento, ultimoElemento]
// }

// console.log(receberPrimeiroEUltimoElemento([45, 'teste', 78, 90, 'sjd', 87, 'tse']))

//----------------- Resolucao 3 ---------------------

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop()

  return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([23, 98, 65, 'retet', 'stj', 54, 'esplanada']))