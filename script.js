let nome;
let numero1;
let numero2;
let resultado1;
let resultado2;
let resultado3;
let resultado4;

function calculadora() {

    nome = prompt("Digite o seu nome:");

    numero1 = Number(prompt("Digite um número:"));
    numero2 = Number(prompt("Digite outro número:"));

    alert("Olá, " + nome + "! Seja bem-vindo à nossa calculadora!");

    resultado1 = numero1 + numero2;
    resultado2 = numero1 - numero2;
    resultado3 = numero1 * numero2;
    resultado4 = numero1 / numero2;

    alert("Resultados para " + nome + ":\n\n" +"Soma (+): " + resultado1 + "\n" +"Subtração (-): " + resultado2 + "\n" + "multiplicação (*): " + resultado3 + "\n"  + "Divisão (/): " + resultado4);
}
