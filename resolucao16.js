/*
A fim de manter o calendário anual ajustado com o movimento de translaçao da terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.

Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

Exemplos:
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2021) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/

// ----------------- Resolução 1 ------------------------

// function checarAnoBissexto(ano){
//   const divisivelPorQuatro = ano % 4 == 0
//   const divisivelPorCem = ano % 100 == 0
//   const divisivelPorQuatrocentos = ano % 400 == 0

//   return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
// }
// console.log(checarAnoBissexto(2024))
// console.log(checarAnoBissexto(2021))

// ----------------- Resolução 2 ------------------------

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias

function checarAnoBissexto(ano){
  return new Date(ano, 1, 29).getDate() === 29;
}
console.log(checarAnoBissexto(2028))