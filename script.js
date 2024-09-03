// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
function fibonacciSequence(numero) {
  let fibSequence = [0, 1];

  while (fibSequence.length < numero) {
    let nextNumber =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextNumber);
  }
  console.log(fibSequence);
  return fibSequence;
}
fibonacciSequence();

function checkNumberFibonacci(numero) {
  let fibSequence = fibonacciSequence(numero);

  if (fibSequence.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  return fibSequence.includes(numero);
}
checkNumberFibonacci(8);

//Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
function verifyString(string, letra) {
  let contador = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letra) {
      contador++;
    }
  }
  console.log(`A letra ${letra} aparece ${contador} vezes na string ${string}.`);
  return contador;
}
verifyString("Adeus", "a");

//Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
function valueSoma() {
  let indice = 12;
  let soma = 0;
  let K = 1;
  while (K < indice) {
    K = K + 1;
    soma = soma + K;
  }
  console.log(`O valor da variável soma é ${soma}`);
  return soma;
}
valueSoma();


//Descubra a lógica e complete o próximo elemento:

1, 3, 5, 7, 9
2, 4, 8, 16, 32, 64, 128
0, 1, 4, 9, 16, 25, 36, 49
4, 16, 36, 64, 100
1, 1, 2, 3, 5, 8, 13
2,10, 12, 16, 17, 18, 19, 21
