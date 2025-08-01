/*
Você está desenvolvendo um sistema de pagamento e todos os 
produtos precisam receber um desconto de 10% antes de serem 
exibidos para as pessoas. Escreva um programa que:

Crie um array com os preços originais dos produtos.
Use o método map() para aplicar 10% de desconto em cada item.
Exiba o novo array com os preços já com o desconto aplicado.
*/
const precos = [100, 80, 50, 120];
const descontoAplicado = precos.map((desconto) => {
    return desconto = desconto - (desconto * 0.10) 
})
console.log(descontoAplicado);
