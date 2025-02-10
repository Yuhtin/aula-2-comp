let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

let resultado;
if (media >= 7) {
    resultado = "Aprovado com média " + media;
} else {
    resultado = "Reprovado com média " + media;
}

console.log(resultado);