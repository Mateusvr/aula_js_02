// //1
const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, "Fortaleza", true]

// //2
// console.log(meuArray[9])

// //3
// for (var i = 0; i < meuArray.length; i++){
    
// console.log(meuArray[i])
// }
// meuArray.forEach(element => console.log(element)
// );

// //4
const meuArrayMutante = meuArray.map(x => 2);
// console.log(meuArrayMutante);

// //5
const numeros = meuArrayMutante.map(x => x + Math.floor(Math.random() * 10))
// for( var i = 0; i < numeros.length; i++){
     // //a.
     // console.log(numeros[i])
    
     // //b.
     // valor = numeros[i];

     // if(valor%2 == 0){

     // }
     // else{
     //     console.log(valor)
     // }
// }
// //c.
// numeros.forEach(function(item){

//     if (item <= 4){

//     }
//     else{
//         console.log(item)
//     }
// })

//d.

// const pares = numeros.filter(item => item % 2 == 0)

// console.log(pares)


// //6
// var cores = ['verde', 'amarelo', 'laranja', 'vermelho', 'azul']
// cores2 = cores.map(function(x){ return x.toUpperCase(); })
// console.log(cores2)

// cores.splice(1, 1)
// console.log(cores)

// const cores3 = cores.map((cores) => cores[0].toUpperCase() + cores.substring(1))
// console.log(cores3)