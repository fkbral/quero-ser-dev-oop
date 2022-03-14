class CNH {
  #categoriasValidas
  #idadesMinimasPorPais
  #idade
  #categoria

  constructor(pais, idade, categoria) {
    // this.#categoriasValidas = [{tipo: "A"}, {tipo: "B"}]
    this.#categoriasValidas = ["A", "B", "C", "D", "E", "AB", "AC", "AD", "AE"]
    this.#idadesMinimasPorPais = {
      BR: 18,
      CA: 16,
      CH: 21,
      US: 16,
      RU: 21,
    }
    this.pais = pais
    this.idade = idade
    this.categoria = categoria
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

  get categoria() {
    return this.#categoria
  }

  set categoria(proximaCategoria) {
    if (this.pais !== "BR") {
      this.#categoria = undefined
      return
    }

    // como seria se categoriasValidas fosse 
    // um array de objetos em vez de strings ou outros tipos prim
    // if(this.#categoriasValidas.find(
    //   categoria => categoria.tipo === proximaCategoria)
    // ){

    const categoriaAnteriorOuInvalida = 
      this.#categoriasValidas.includes(this.#categoria)
      ? this.#categoria
      : "categoria inválida"

    if(!this.#categoriasValidas.includes(proximaCategoria)) {
      this.#categoria = categoriaAnteriorOuInvalida
      return
    }

    this.#categoria = proximaCategoria
  }
}

const carteiraDaMaria = new CNH("BR", 19, "G")
// console.log(carteiraDaMaria.idade)

carteiraDaMaria.idade = 25
carteiraDaMaria.categoria = "AC"

console.log(carteiraDaMaria)
// console.log(carteiraDaMaria.idade)