const carro = {
  marca: 'Ford',
  modelo: 'KA',
  capacidadeTotalDoTanqueEmLitros: 30,
  capacidadeAtualDoTanqueEmLitros: 4,
  // liga: function() {
  //   console.log('ligou carro')
  // }
  // liga: () => {
  //   console.log('ligou carro')
  // }

  // short syntax
  liga() {
    if(this.capacidadeAtualDoTanqueEmLitros > 0) {
      console.log('ligou carro')
      return
    }

    console.log('Não foi possível ligar o carro, pois a gasolina é insuficiente')
  }
}

// Se quisermos adicionar um método após a criação do objeto, poderíamos fazer assim:
// (contudo geralmente iremos fazer essa etapa na própria criação do objeto)
// carro.liga = function() {
//   if(this.capacidadeAtualDoTanqueEmLitros > 0) {
//     console.log('ligou carro')
//     return
//   }

//   console.log('Não foi possível ligar o carro, pois a gasolina é insuficiente')
// }

carro.liga()