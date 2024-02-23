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
      console.log(`${tarefas.indexOf(tarefa)}: ${tarefa}`);
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
