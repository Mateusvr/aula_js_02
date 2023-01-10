//citar frutas
// const frutas = ['abacaxi', 'banana', 'caju', 'damasco', 'ervilha'];
// for ( let index=0; index< frutas.length; index++) {
//     console.log(frutas[index])
// }

//citar de um em um
// let frutas = ['a', 'b', 'c', 'd'];
// let i;
// for(i = 0; i < frutas.length; i++ ) {
//     console.log(frutas[i]) 
// }

//add apenas pares 1
// for( var n=0; n <= 20; n = n + 2 ){
//     console.log(n)
// }

//add apenas pares 2 
// const pares = []
// for( var n=0; n <= 20; n = n + 2 ){
//     pares.push(n)
// }
// console.log(pares)

//while
// while(true) {
//     console.log("repetindo")
// }

// //while sem loop
// let i = 0
// while(i < 2) {
//     console.log("repetindo"); 
//     i++;
// }

//do / while
// do{
//     console.log('repetindo');
// } while (2 > 3)

//for / of
// const frutas = ['abacaxi', 'banana', 'pera', 'uva']
// for (const fruta of frutas) {
//     console.log(fruta)
// }

// citar itens com for / of
// const frutas = ['abacaxi', 'banana', 'pera', 'uva']
// for (const fruta of frutas) {
//     console.log(fruta)
// }
// frutas.forEach(console.log)

// colocar parametros
// frutas.forEach((value, index, array) => console.log(value, index, array))

//concatenar itens
// const frutas = ['abacaxi', 'banana', 'pera', 'uva']
// const frutas2 = ['maca', 'acerola']
// const frutasNovasConcatenadas = frutas.concat(frutas2)
// console.log(frutasNovasConcatenadas)

// método join, útil para endereços
// const endereco = ['Rua Soriano Albuquerque', '100', 'Apt. 6', 'Fortaleza', 'Ceará']
// console.log(endereco.join(', '))

// colocar ao quadrado
// const numeros = [1,2,3,4,5]
// const numerosAoQuadrado = numeros.map((value) => Math.pow(value,2)) //ou => value*value
// console.log(numerosAoQuadrado)

// retornar maior
// const numeros = [1,2,10,4,5]
// const maior = Math.max(...numeros)
// console.log(maior)

//organizar array => menor p maior: a-b; maior p menor: b - a
// const numeros = [1,2,10,4,5]
// numeros.sort((a, b) => a - b)
// console.log(numeros)