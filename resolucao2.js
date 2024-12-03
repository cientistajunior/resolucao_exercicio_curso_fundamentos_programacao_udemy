function idadeDia(idade){
  const diasDoAno = 365;
  return `Você tem ${idade} anos! Já se passaram ${ diasDoAno* idade} dias.`
}

console.log(idadeDia(25))