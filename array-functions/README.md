# Funções e Operações com Arrays

Este script realiza uma série de operações com arrays no JavaScript, incluindo ordenação, manipulação de elementos, filtragem e concatenação.

### 1. Declaração do array `numeros`
```javascript
let numeros = [6, 9, 3];
console.log(numeros); 
// [6, 9, 3]
```

### 2. Ordena os números do array em ordem crescente
```javascript
numeros = numeros.sort();
console.log(numeros); 
// [3, 6, 9]
```

### 3. Converte o array para uma string separada por ", "
```javascript
numeros = numeros.join(", ");
console.log(numeros); 
// "3, 6, 9"
```

### 4. Converte a string de volta para um array, separando pelos ", "
```javascript
numeros = numeros.split(", ");
console.log(numeros); 
// ["3", "6", "9"]
```

### 5. Itera por cada número no array e apenas o imprime
```javascript
numeros.forEach((numero) => {
  console.log(numero);
});
// "3"
// "6"
// "9"
```

### 6. Cria um novo array multiplicando cada número por 2
```javascript
numeros = numeros.map((numero) => numero * 2);
console.log(numeros); 
// [6, 12, 18]
```

### 7. Adiciona o número 27 ao final do array
```javascript
numeros.push(27);
console.log(numeros); 
// [6, 12, 18, 27]
```

### 8. Remove o primeiro elemento do array
```javascript
numeros.splice(0, 1);
console.log(numeros); 
// [12, 18, 27]
```

### 9. Filtra o array, mantendo apenas números maiores ou iguais a 15
```javascript
numeros = numeros.filter((n) => n >= 15);
console.log(numeros); 
// [18, 27]
```

### 10. Junta os dois arrays `numeros` e `numeros2`
```javascript
let numeros2 = [19, 25, 8, 12];
numeros = numeros.concat(numeros2);
console.log(numeros); 
// [18, 27, 19, 25, 8, 12]
```

### 11. Verifica os índices de números maiores ou iguais a 15
```javascript
let a = [];
numeros.forEach((n, index) => {
  if (n >= 15) {
    a.push(index);
  }
});
console.log(a); 
// [0, 1, 2, 3]
```

### 12. Remove os números maiores ou iguais a 15 usando os índices armazenados
```javascript
let b = 0;
a.forEach((index) => {
  numeros.splice(index - b, 1);
  b++;
});
console.log(numeros); 
// [8, 12]
```

### 13. Verifica se o número 12 está no array
```javascript
numeros = numeros.includes(12);
console.log(numeros); 
# true
```

### 14. Declara um array com algumas frutas
```javascript
let frutas = ["maca", "banana", "pera", "bacate"];
console.log(frutas); 
// ["maca", "banana", "pera", "bacate"]
```

### 15. Filtra as frutas que contêm "ba" no nome
```javascript
frutas = frutas.filter((fruta) => {
  return fruta.includes("ba");
});
console.log(frutas); 
// ["banana", "bacate"]
```