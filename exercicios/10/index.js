class Programa {
  #generosPermitidos

  constructor(duracao, generos) {
    this.#generosPermitidos = ["ação", "comédia", "suspense", "drama", "terror"]
    this.duracao = duracao
    this.generos = generos.filter((genero) => {
      return this.#generosPermitidos.includes(genero)
    })
  }
}

const programaX = new Programa(50, ["suspense", "drama", "romance"])

console.log(programaX)