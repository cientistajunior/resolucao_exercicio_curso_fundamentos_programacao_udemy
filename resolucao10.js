// ------ Resultado esperado -----------------
//simboloMais(2) // retornará "++"
//simboloMais(4) // retornará "++++"

// --------- ----- Resolução 1 ------------------------

// function simboloMais(quantidade){
//   return Array(quantidade).fill('+').join('')
// }

// console.log(simboloMais(2))
// console.log(simboloMais(4))

// ---------------- Resoluão 2------------------------

// function simboloMais(quantidade){
//   let resultado = '';

//   for(let i = 0; i < quantidade; i++)
//     resultado += '+';

//     return resultado
// }
// console.log(simboloMais(2))
// console.log(simboloMais(4))

// ---------------- Resoluão 3------------------------

function simboloMais(quantidade) {
  return '+'.repeat(quantidade)
}

console.log(simboloMais(2))
console.log(simboloMais(4))