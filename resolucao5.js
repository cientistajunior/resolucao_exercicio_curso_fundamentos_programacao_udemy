// Crie uma funcao que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar numeros de strings.
// maiorouIgual(0,0) retornara true
// maiorouIgual(0,"0") retornara false
// maiorouIgual(5,1) retornara true

function maiorOuIgual(n1,n2){
  if(typeof n1 != typeof n2) 
    return false
    return n1 >= n2
  
}

console.log(maiorOuIgual('5',1))
console.log(maiorOuIgual(2,3))
console.log(maiorOuIgual(9,8))
console.log(maiorOuIgual(7,7))
console.log(maiorOuIgual(8,'7'))
console.log(maiorOuIgual('5','7'))