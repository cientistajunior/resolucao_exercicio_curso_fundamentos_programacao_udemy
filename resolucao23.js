/*
Criar umma função que receba uma string como parâmetro e conte quantas palavras tem nela.

Considere que todas as palavras só são separadas por um espaço.

Exemplos:

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

// ------------------- Resolução 1 -------------------

function contarPalavras(frase){
  const palavras = frase.split(" ")

  return palavras.length
}
console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))