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

class Bicicleta extends Veiculo {
  constructor(rodas, usaCombustivel, infantil) {
    const infantilBooleano = typeof infantil === "boolean" ? infantil : false

    const rodasAjustadasParaInfantil = rodas > 2 ? rodas : 3
    const rodasAjustadas = infantilBooleano ? rodasAjustadasParaInfantil : rodas

    super(rodasAjustadas, usaCombustivel)

    this.infantil = infantilBooleano
  }
}

const veiculoGenerico = new Veiculo(-10, 3)
const bikeCaloi = new Bicicleta(2, false, true)

console.log(veiculoGenerico)
console.log(bikeCaloi)