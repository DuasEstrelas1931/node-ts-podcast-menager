"use strict";

// src/index.ts
function solucao(N2, classificacoes2) {
  const soma = {};
  const count = {};
  for (let i = 0; i < N2; i++) {
    const id = classificacoes2[i][0];
    const avaliacao = classificacoes2[i][1];
    if (!(id in soma)) {
      soma[id] = 0;
      count[id] = 0;
    }
    soma[id] += avaliacao;
    count[id] += 1;
  }
  let pratoMaisAmado = null;
  let maiorMedia = 0;
  let menorID = Number.MAX_SAFE_INTEGER;
  for (const id in soma) {
    const media = soma[id] / count[id];
    const pratoID = parseInt(id);
    if (media > maiorMedia || media === maiorMedia && pratoID < menorID) {
      maiorMedia = media;
      menorID = pratoID;
      pratoMaisAmado = pratoID;
    }
  }
  return pratoMaisAmado;
}
var N = 4;
var classificacoes = [
  [512, 2],
  [123, 3],
  [987, 4],
  [123, 5]
];
var resultado = solucao(N, classificacoes);
console.log(`O prato mais amado \xE9 o de ID ${resultado}.`);
