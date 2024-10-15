# Manipulação de Datas em JavaScript

Este script realiza uma série de operações com datas no JavaScript, incluindo criação, formatação e manipulação de objetos de data.

### 1. Cria uma nova data com o valor atual
```javascript
var date = new Date();
console.log(date); 
// "Mon Oct 15 2024 15:42:00 GMT-0300 (Brasilia Standard Time)"
```

### 2. Converte a data atual para o formato ISO 8601
```javascript
date = date.toISOString();
console.log(date); 
// "2024-10-15T18:42:00.000Z"
```

### 3. Cria um objeto de data a partir da string ISO gerada
```javascript
date = new Date(date);
console.log(date); 
// "Mon Oct 15 2024 15:42:00 GMT-0300 (Brasilia Standard Time)"
```

### 4. Define um objeto com valores para dia, mês e ano
```javascript
let criaData = {
  dia: 2,
  mes: 10,
  ano: 2020,
};
console.log(criaData); 
// {dia: 2, mes: 10, ano: 2020}
```

### 5. Cria uma data customizada usando os valores do objeto `criaData`
```javascript
const novaData = new Date(criaData.ano, criaData.mes - 1, criaData.dia);
console.log(novaData); 
// "Fri Oct 02 2020 00:00:00 GMT-0300 (Brasilia Standard Time)"
```

### 6. Converte a data para o formato local (dd/mm/yyyy)
```javascript
const dateDia = date.toLocaleDateString("pr-BR");
console.log(dateDia); 
// "15/10/2024"
```

### 7. Converte a hora local no formato ajustado
```javascript
const dateHora = date.toLocaleTimeString("pr-BR");
console.log(dateHora); 
// "15:42:00"
```

### 8. Converte e exibe data e hora juntos no formato local
```javascript
const dateAmbos = date.toLocaleString("pr-BR");
console.log(dateAmbos); 
// "15/10/2024 15:42:00"
```