class Carro {
  constructor(cor, marca, modelo, volumeTotal, volumeAtual, tipoDeCombustivel) {
    this.cor = cor
    this.marca = marca
    this.modelo = modelo
    this.capacidadeDoTanqueEmLitros = volumeTotal
    this.volumeAtualDoTanqueEmLitros = volumeAtual
    this.tipoDeCombustivel = tipoDeCombustivel
  }
}

const fusca = new Carro("azul", "volkswagen", "hatch")
console.log(fusca)