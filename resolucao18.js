/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicacao, é possível adicionar produtos ou serviços, informando nome, categoria e preco. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.

Crie uma funcao que receba um array de produtos e retorne o total das despesas.

Exemplos:

despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

despesasTotais([
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
*/

// ----------------- Resolucao 1 ---------------------------------

// function despesasTotais(itens){
//   var total = 0

//   for(let item of itens)
//     total += item.preco

//   return total
// }
// console.log(despesasTotais([
//   {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
//   {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
// ]))

// console.log(despesasTotais([
//   {nome: "Jornal online", categoria: "Informação", preco: 89.99},
//   {nome: "Cinema", categoria: "Entretenimento", preco: 150}
// ]))

// ----------------- Resolucao 2 ---------------------------------

// function despesasTotais(itens){
//   return itens
//     .map(item => item.preco)
//     .reduce((acumulador, valorAtual) => acumulador + valorAtual)
// }

// console.log(despesasTotais([
//   {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 35},
//   {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 90}
// ]))

// console.log(despesasTotais([
//   {nome: "Jornal online", categoria: "Informação", preco: 8989099.99},
//   {nome: "Cinema", categoria: "Entretenimento", preco: 1950}
// ]))

// ----------------- Resolucao 3 ---------------------------------

function despesasTotais(itens) {
  return itens.reduce((acumulador, valorAtual) => acumulador +valorAtual.preco, 0)
}
console.log(despesasTotais([
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 35},
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 90}
]))

console.log(despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 899},
  {nome: "Cinema", categoria: "Entretenimento", preco: 1950}
]))
