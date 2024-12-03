// crie uma funcao que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a funcao deverá retornar "fevereiro", pois este é o 2° mês.

// receberNomeDoMes(1) retornara 'janeiro'
// receberNomedoMes(4) retornara 'abril'

console.log("Mês do Ano");
console.log();

function receberNomeDoMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
      break;
    case 2:
      return "Fevereiro";
      break;
    case 3:
      return "Março";
      break;
    case 4:
      return "Abril";
      break;
    case 5:
      return "Maio";
      break;
    case 6:
      return "Junho";
      break;
    case 7:
      return "Julho";
      break;
    case 8:
      return "Agosto";
      break;
    case 9:
      return "Setembro";
      break;
    case 10:
      return "Outubro";
      break;
    case 11:
      return "Novembro";
      break;
    case 12:
      return "Dezembro";
      break;
    default:
      break;
  }
}

console.log(receberNomeDoMes(2))
console.log(receberNomeDoMes(9))