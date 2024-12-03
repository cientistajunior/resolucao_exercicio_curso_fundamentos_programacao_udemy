// desenvolva uma funcao que recebe dois numeros inteiros não negativos(maiores ou igual a zero) e realize a multiplicacao deles. Porém, nao utilize o operador de multiplicacao.

// multiplicar(5, 5) // retornara 25
//  multiplicar(0, 7) // retornara 0

function multiplicar(numero, multiplicador){
  if(numero === 0 || multiplicador === 0) return 0

  return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador -1)
}

console.log(multiplicar(2, 7))
console.log(multiplicar(5, 8))