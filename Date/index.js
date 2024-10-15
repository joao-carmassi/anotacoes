// Cria uma nova data com o valor atual (data e hora do momento da execução).
var date = new Date();
console.log(date);

// Converte a data atual para o formato ISO 8601 (string padronizada).
date = date.toISOString();
console.log(date);

// Cria novamente um objeto de data a partir da string ISO gerada anteriormente.
date = new Date(date);
console.log(date);

// Define um objeto com valores para dia, mês e ano.
let criaData = {
  dia: 2,
  mes: 10,
  ano: 2020,
};

// Cria uma data customizada usando os valores do objeto "criaData".
const novaData = new Date(criaData.ano, criaData.mes - 1, criaData.dia);
console.log(date);

// Converte a data para o formato local de data (dd/mm/yyyy).
const dateDia = date.toLocaleDateString("pr-br");
console.log(dateDia);

// Converte a hora local no formato ajustado.
const dateHora = date.toLocaleTimeString("pr-br");
console.log(dateHora);

// Converte e exibe data e hora juntos no formato local.
const dateAmbos = date.toLocaleString("pr-br");
console.log(dateAmbos);
