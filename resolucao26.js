/*
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

Exemplos:

console.log(removerVogais("Cod3r") // retornará "cd3r"
console.log(removerVogais("Fundamentos") // retornará "fndmnts"
*/

// -------------- Resolução 1 --------------------

// function removerVogais(frase){
//   const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

//   vogais.forEach( vogal => frase = frase.replace(vogal, ''))

//   return frase
// }
// console.log(removerVogais("Cod3r"))
// console.log(removerVogais("Fundamentos"))

// -------------- Resolução 2 --------------------

function removerVogais(frase){
  return frase.replace(/[aeiou]/ig, '')
}
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))