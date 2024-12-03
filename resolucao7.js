// Crie uma funcao que receba quatro numeros como parametro(numero, minimo, maximo, inclusivo) e retorne se o parametro numero(o primeiro) esta entre minimo e maximo. Quando o parametro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou maximo. Caso o parametro inclusivo nao seja informado, seu valor padrao devera ser false, portanto, a logica sera exclusiva, nao considerando se numero e igual a minimo ou a maximo.

// estaEntre(10, 100, 50) retornara true
// estaEntre(16, 100, 100) retornara false
// estaEntre(3, 150, 3, true) retornara false

function estaEntre(minimo, maximo, numero, inclusivo = false) {
  if(inclusivo) return numero >= minimo && numero <= maximo

  return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50)) 
console.log(estaEntre(16, 100, 100)) 
console.log(estaEntre(3, 150, 3, true))