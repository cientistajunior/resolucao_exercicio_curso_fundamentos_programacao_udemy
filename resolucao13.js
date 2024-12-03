/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

Exemplos:

filtrarNumeros(["JavaScript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) //retornará []
*/

// ------------------- Resolucao 1 ------------------------

// function filtrarNumeros(array){
//   const resultado = []
  
//   for(let item of array){
//     if(typeof item === "number"){
//       resultado.push(item)
//     }
//   }
//   return resultado
// }
// console.log(filtrarNumeros([12, 67, 'tr', 78, 'tse', 'tyu', 34, 'wq']))
// console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]))
// console.log(filtrarNumeros(["a", "c"]))

// ------------------- Resolucao 2 ------------------------

function filtrarNumeros(array){
  return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros([12, 'tetet', 23]))
console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))