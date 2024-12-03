// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]

// function repetir(item, quantidade){
//   let resultado = []

//   for(let i = 0; i < quantidade; i++) {
//     resultado.push(item)
//   }
//   return resultado
// }

// console.log(repetir("código", 5)); // Imprime "Olá, mundo!" 5 vezes
// console.log(repetir(7, 3));

function repetir(item, quantidade) {
  return Array(quantidade).fill(item)
}
console.log(repetir("código", 5))
console.log(repetir(7,3))