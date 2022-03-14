class Carro {
  #modelosPermitidos
  #combustiveisPermitidos

  constructor(cor, marca, modelo, volumeTotal, volumeAtual, combustivel) {
    // const modelosPermitidos = ['hatch', 'sedan']
    this.#modelosPermitidos = ['hatch', 'sedan']
    this.#combustiveisPermitidos = ['gasolina', 'álcool', 'flex']
    
    this.cor = cor
    this.marca = marca

    this.modelo = 
      this.#modelosPermitidos.includes(modelo) ? modelo : 'modelo inválido'

    this.capacidadeDoTanqueEmLitros = volumeTotal

    this.volumeAtualDoTanqueEmLitros = 
      volumeAtual < volumeTotal ? volumeAtual : 'volume inválido'

    this.tipoDeCombustivel = 
      this.#combustiveisPermitidos.includes(combustivel) 
      ? combustivel
      : 'combustível inválido' 
  }
}

const fusca = new Carro("azul", "Volkswagen", "hatch", 35, 40, "GNV")
const civic = new Carro("prata", "Honda", "sedan")
console.log(fusca)
console.log(civic)