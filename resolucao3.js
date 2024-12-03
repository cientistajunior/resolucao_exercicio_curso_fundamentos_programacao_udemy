
function horaTrabalhadaESalario(horasTrabalhadas, valorPorHora){
  const descontSalario = horasTrabalhadas * valorPorHora * 0.3;
  const salarioBruto = horasTrabalhadas * valorPorHora;
  const salarioLiquidoMensal = salarioBruto - descontSalario;
  return `Salário líquido é igual a R$ ${salarioLiquidoMensal}, em que ${salarioLiquidoMensal} é o salário líquido do funcionário no mês.`
}

console.log(horaTrabalhadaESalario(180, 60))



// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é da quantidade de horas trbalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a impostos.

// O retorno da funcao deve ser string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário no mês.