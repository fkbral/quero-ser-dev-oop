class Veiculo {
  constructor(rodas, usaCombustivel) {
    this.rodas = rodas >= 1 ? rodas : 1
    this.usaCombustivel = typeof usaCombustivel === "boolean" ? usaCombustivel : false 
  }
}

class Carro extends Veiculo {
  #tipoDecombustivelValidos

  constructor(rodas, usaCombustivel, tipoDecombustivel) {
    this.#tipoDecombustivelValidos = ['gasolina', 'álcool', 'flex']

    super(rodas, usaCombustivel)
    this.tipoDecombustivel = 
      this.#tipoDecombustivelValidos.includes(tipoDecombustivel)
      ? tipoDecombustivel
      : 'gasolina'
  }
}

const veiculoGenerico = new Veiculo(-10, 3)

console.log(veiculoGenerico)