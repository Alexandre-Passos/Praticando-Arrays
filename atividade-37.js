/*
Você está criando um sistema para controlar os gastos mensais da sua casa. 
Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

Escreva um programa que:

Crie um array com os valores das despesas.
Use um loop for para somar os valores.
Exiba o total gasto.
*/

const despesas = [120, 80, 45.5, 200, 60];
const calcularDespesas = (despesas) => {
    let depesetaTotal = 0
    for (let i = 0; i < despesas.length; i++) {
        depesetaTotal += despesas[i]
    }
    return `Total de despesas: R$ ${depesetaTotal}`
}
console.log(calcularDespesas(despesas));
