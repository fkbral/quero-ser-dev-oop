class Carro {
  #marca
  #marcasDisponiveis

  constructor(marca, modelo) {
    this.#marcasDisponiveis = ["Ford", "Honda", "Volkswagen"]
    this.modelo = modelo
    this.#marca = this.#validaMarca(marca)
  }

  get marca() {
    return this.#marca
  }

  set marca(novaMarca) {
    this.#marca = this.#validaMarca(novaMarca)
  }

  #validaMarca(novaMarca) {
    const marcaAtualOuPadrao = 
    this.#marcasDisponiveis.includes(this.#marca) ? this.#marca : "Honda"

    return this.#marcasDisponiveis.includes(novaMarca) ? novaMarca : marcaAtualOuPadrao
  }
}

const carro1 = new Carro("KIA", "Ka")
console.log(carro1.marca)

carro1.marca = "Ford"
console.log(carro1.marca)

carro1.marca = "Subaru"
console.log(carro1.marca)
console.log(carro1)