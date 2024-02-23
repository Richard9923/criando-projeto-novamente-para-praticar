/* primeiro projeto jogo da forca */

const words = ["controle", "cadeira", "quadro"];
let randomNumber = Math.floor(Math.random() * words.length);
let word = words[randomNumber];

display = [];

for (caracter in word) {
  display.push("_");
}

let vidas = 6;
let palavrasTentadas = "";
let programaOn = true;
console.log(`Suas vidas: ${vidas}.`);
console.log(`Palavra secreta: ${display}.`);
while (programaOn == true) {
  let jogadorEscolha = prompt(
    "Tente adivinhar a palavra escolhendo uma letra."
  );

  if (
    display.includes(jogadorEscolha) ||
    palavrasTentadas.includes(jogadorEscolha)
  ) {
    console.log("Você já tentou essa letra.");
  }

  palavrasTentadas += jogadorEscolha;

  for (let i = 0; i < word.length; i++) {
    let letra = word[i];
    if (letra == jogadorEscolha) {
      display[i] = letra;
    }
  }

  if (!display.includes(jogadorEscolha)) {
    console.log("Você errou a letra.");
    vidas -= 1;
  }
  console.log(`Suas vidas: ${vidas}.`);
  console.log(`Palavra secreta: ${display}.`);

  if (!display.includes("_")) {
    console.log("Você adivinhou a palavra.");
    programaOn = false;
  } else if (vidas == 0) {
    console.log("Você perdeu, ficou sem vidas.");
    programaOn = false;
  }
}

/* todo lista */

function inputUsuario() {
  let escolherComando = prompt("Qual comando você deseja realizar?");
  return escolherComando;
}

function rodarPrograma(input) {
  if (input == "new") {
    let tarefa = prompt("Qual tarefa você quer adicionar? ");
    tarefas.push(tarefa);
    console.log(`Tarefa adicionada: ${tarefa}`);
  } else if (input == "list") {
    tarefas.map((tarefa) => {
      console.log(`${indexOf(tarefa)}: ${tarefa}`);
    });
  } else if (input == "delete") {
    let index = prompt("Qual o index da tarefa que você quer deletar? ");
    console.log(`Tarefa ${tarefas[index]} deletada.`);
    tarefas.splice(`${index}, 1`);
  } else if (input == "quit") {
    programOn = false;
    console.log("Programa encerrado.");
  } else {
    console.log("Comando não reconhecido tente novamente.");
  }
}

let programOn = true;
let tarefas = [];

while (programOn == true) {
  let escolhaUsuario = inputUsuario();
  rodarPrograma(escolhaUsuario);
}
