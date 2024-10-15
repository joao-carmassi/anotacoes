// Declara um array com os números 6, 9 e 3
let numeros = [6, 9, 3];
console.log(numeros);

// Ordena os números do array em ordem crescente
numeros = numeros.sort();
console.log(numeros);

// Converte o array para uma string separada por ", "
numeros = numeros.join(", ");
console.log(numeros);

// Converte a string de volta para um array, separando pelos ", "
numeros = numeros.split(", ");
console.log(numeros);

// Itera por cada número no array e apenas o imprime (sem efeito real neste caso)
numeros.forEach((numero) => {
  console.log(numero);
});

// Cria um novo array multiplicando cada número por 2
numeros = numeros.map((numero) => numero * 2);
console.log(numeros);

// Adiciona o número 27 ao final do array
numeros.push(27);
console.log(numeros);

// Remove o primeiro elemento do array
numeros.splice(0, 1);
console.log(numeros);

// Filtra o array, mantendo apenas números maiores ou iguais a 15
numeros = numeros.filter((n) => n >= 15);
console.log(numeros);

// Junta os dois arrays em um só
let numeros2 = [19, 25, 8, 12];
numeros = numeros.concat(numeros2);
console.log(numeros);

// Verifica os índices de números maiores ou iguais a 15 e os armazena em 'a'
let a = [];
numeros.forEach((n, index) => {
  if (n >= 15) {
    a.push(index);
  }
});
console.log(a);
// Remove os números maiores ou iguais a 15 usando seus índices armazenados
let b = 0;
a.forEach((index) => {
  numeros.splice(index - b, 1);
  b++;
});
console.log(numeros);

// Verifica se o número 12 está no array
numeros = numeros.includes(12);
console.log(numeros);

// Declara um array com algumas frutas
let frutas = ["maca", "banana", "pera", "bacate"];
console.log(frutas);

// Filtra as frutas que contêm "ba" no nome
frutas = frutas.filter((fruta) => {
  return fruta.includes("ba");
});
console.log(frutas);
