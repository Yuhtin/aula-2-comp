let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let notas = []
notas.push(nota1, nota2, nota3);

let media = 0;

for (let i = 0; i < notas.length; i++) {
    media += notas[i];
}

media = (media / notas.length).toFixed(2);

let resultado;
if (media >= 7) {
    resultado = "Aprovado com média " + media;
} else {
    resultado = "Reprovado com média " + media;
}

console.log(resultado);