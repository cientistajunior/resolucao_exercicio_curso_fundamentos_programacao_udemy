/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes  que o caractere se repete na string. A função deverá ser case-sensitive,ou seja, irá diferenciar maiúsculas de minúsculas.

Exemplos:

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhce-te a ti mesmo") // retornará 1
*/

// -------------- Resolução 1 ----------------------------

// function contarCaractere(caractereBuscado, frase) {
//   let contador = 0

//   for(let i = 0; i < frase.length; i++){
//     if (frase.charAt(i) === caractereBuscado){
//       contador++
//     }
//   }
//   return contador
// }
// console.log(contarCaractere("e", "A sorte favorece os audazes"))
// console.log(contarCaractere("c", "Conhce-te a ti mesmo"))

// -------------- Resolução 2 ----------------------------

function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter(caractere => caractere === caractereBuscado).length
}
console.log(contarCaractere("a", "A sorte favorece os audazes"))
console.log(contarCaractere("z", "Conhce-te a ti mesmo"))