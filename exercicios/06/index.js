class CNH {
  // #categoriasValidas
  #idadesMinimasPorPais
  #idade

  constructor(pais, idade) {
    // this.#categoriasValidas = ["A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"]
    this.#idadesMinimasPorPais = {
      BR: 18,
      CA: 16,
      CH: 21,
      US: 16,
      RU: 21,
    }
    this.pais = pais
    this.idade = idade
  }

  get idade() {
    return this.#idade
  }

  set idade(idadeNova) {
    const idadeMinimaEncontradaOuValorPadrao = 
      this.#idadesMinimasPorPais[this.pais]
      ? this.#idadesMinimasPorPais[this.pais]
      : 18

    const idadeEhValida = 
      idadeNova >= idadeMinimaEncontradaOuValorPadrao

    this.#idade = idadeEhValida ? idadeNova : 'idade inválida'
  }
}

const carteiraDaMaria = new CNH("CH", 18)
console.log(carteiraDaMaria.idade)

carteiraDaMaria.idade = 25

// console.log(carteiraDaMaria)
console.log(carteiraDaMaria.idade)