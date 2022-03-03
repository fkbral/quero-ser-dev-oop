const caneta = {
	marca: 'bic',
	tipo: 'esferográfica',
}

// const canetaVermelha = {
//   marca: 'bic',
// 	tipo: 'esferográfica',
//   cor: 'vermelha',
// }

// resolução 1
// const canetaVermelha = {
//   marca: caneta.marca,
// 	tipo: caneta.tipo,
//   cor: 'vermelha',
// }

// resolução 2
// const { marca, tipo } = caneta

// const canetaVermelha = {
//   marca,
// 	tipo,
//   cor: 'vermelha',
// }

// resolução 3
const canetaVermelha = {
  ...caneta,
  cor: 'vermelha',
}

console.log(canetaVermelha)