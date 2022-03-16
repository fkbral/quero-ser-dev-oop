class Veiculo {
  constructor(rodas, usaCombustivel) {
    this.rodas = rodas
    this.usaCombustivel = usaCombustivel
  }
}

const veiculoGenerico = new Veiculo(1, false)

console.log(veiculoGenerico)