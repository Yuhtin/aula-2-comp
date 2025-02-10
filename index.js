let notas = [7, 8, 9]
let media = 0;

for (let i = 0; i < notas.length; i++) {
    media += notas[i];
    console.log('Nota ' + (i + 1) + ': ' + notas[i]);
}

media = (media / notas.length).toFixed(2);

let resultado;
if (media >= 7) {
    resultado = "Aprovado com média " + media;
} else {
    resultado = "Reprovado com média " + media;
}

console.log(resultado);