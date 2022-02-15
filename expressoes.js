//Declaração de função

function minhaFuncao(param) {
  //Bloco de código
}
minhaFuncao()

//Expressão de função

// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 2))

// Diferença Princiapal: HOISTING
//Funções e var são "Listadas" no topo do arquivo.

console.log(apresentar())

function apresentar() {
  return "Olá";
}
console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}