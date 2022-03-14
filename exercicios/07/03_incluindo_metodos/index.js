class Carro {
  #modelosPermitidos
  #combustiveisPermitidos
  #precosPorLitro

  constructor(cor, marca, modelo, volumeTotal, volumeAtual, combustivel) {
    this.#modelosPermitidos = ['hatch', 'sedan']
    this.#combustiveisPermitidos = ['gasolina', 'álcool', 'flex']
    this.#precosPorLitro = {
      gasolina : 5.62,
      "álcool" : 4.16,
    }
    
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

  abastecer(tipoDeCombustivel, litros) {
    // if (
    //   (tipoDeCombustivel === this.tipoDeCombustivel 
    //   || this.tipoDeCombustivel === 'flex')
    //   && quantidade <= this.capacidadeDoTanqueEmLitros - this.volumeAtualDoTanqueEmLitros
    // ) {
    //   this.volumeAtualDoTanqueEmLitros += quantidade
    // }

    // if (
    //   'gasolina' !== 'flex' //true
    //   && 'flex' !== 'flex' //false
    // ) {
    //     return
    // }

    if (
      tipoDeCombustivel !== this.tipoDeCombustivel 
      && this.tipoDeCombustivel !== 'flex'
    ) {
        return
    }

    if (litros <= this.capacidadeDoTanqueEmLitros - this.volumeAtualDoTanqueEmLitros) {
      this.volumeAtualDoTanqueEmLitros += litros

      const preco = this.calculaPreco(tipoDeCombustivel, litros)

      // console.log(
      //   "O preço do abastecimento para " + litros + "L de " + tipoDeCombustivel
      //   + " é de " + preco
      // )

      console.log(
        `O preço do abastecimento para ${litros}L de ${tipoDeCombustivel} é de ${preco}`
      )
    }
  }

  calculaPreco(tipoDeCombustivel, litros) {
    const valor = this.#precosPorLitro[tipoDeCombustivel] * litros
    const preco = valor.toLocaleString(
      'pt-BR', { style: 'currency', currency: 'BRL' }
    )
    return preco
  }
}

const fusca = new Carro("azul", "Volkswagen", "hatch", 35, 20, "flex")
const civic = new Carro("prata", "Honda", "sedan")
console.log(fusca)
console.log(civic)
console.log(fusca.volumeAtualDoTanqueEmLitros)

fusca.abastecer("gasolina", 14)
console.log(fusca.volumeAtualDoTanqueEmLitros)