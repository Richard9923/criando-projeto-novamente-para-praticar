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
