
function cumprimentar (nome) {
  const saudacao = 'Olá'
  return [saudacao, nome].join(', ').concat('!')
}

console.log(cumprimentar("wilson"))
console.log(cumprimentar('TSE'))