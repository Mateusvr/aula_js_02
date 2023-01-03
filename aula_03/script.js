// const arrayFrutas = [" banana"," maçã"," uva"," pêra", ];
// console.log('salada 0:' + arrayFrutas);

// arrayFrutas.push(" leite condensado ");
// console.log('salada 1:' + arrayFrutas);

// arrayFrutas.push(" leite em pó");
// console.log('salada 2:' + arrayFrutas);

// const removido = arrayFrutas.pop();
// console.log('salada 3:' + arrayFrutas);
// console.log('removido:' + removido);

// arrayFrutas.splice(3, 1);
// console.log('salada 4: ' + arrayFrutas);

// arrayFrutas.shift();
// console.log('salada 4: ' + arrayFrutas);

// arrayFrutas.unshift('banana');
// console.log('salada 5: ' + arrayFrutas);



// const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro"];

// let posicao = nomes.indexOf("Davi");

// if(posicao === -1) {
//     console.log("Nome não encontrado")
// } else {
//     console.log("Nome: " + nomes[posicao])
// }



// function grito(parametroFala){
//     console.log(parametroFala.toUpperCase())
// }

// function somar(p1, p2) {
//     return p1 + p2
// }

// console.log(somar(130,190))

// function imprimir(funcaoImprimir, texto) {
//     funcaoImprimir(texto)
// }

// imprimir(console.log, "Olá mundo!")

// const salada = ["banana", "maçã", "uva", "pêra"]

// function capsLk(valor) {
//     return valor.toUpperCase()
// }

// const saladaUpper = salada.map((fruta)=> {return fruta.toUpperCase()})
// console.log(salada)
// console.log(saladaUpper)



const nomes = ["Ronier", "Larissa", "Vandecir", "Davi", "Alessandro", "Davi"];
 
function filtrarNomes(nome){
    if(nome === "Davi")
        return nome;
}

console.log(nomes.filter(filtrarNomes))

console.log(nomes.includes("Ronier"))
