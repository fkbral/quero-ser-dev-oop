class Programa {
  #generosPermitidos
  #generos

  constructor(duracao, generos) {
    this.#generosPermitidos = ["ação", "comédia", "suspense", "drama", "terror"]
    this.duracao = duracao
    this.generos = generos
  }

  get generos() {
    return this.#generos
  }

  set generos(generos) {
    this.#generos = generos.filter((genero) => {
      return this.#generosPermitidos.includes(genero)
    })
  }
}

class Seriado extends Programa {
  constructor(duracao, generos, numeroDeEpisodios, anoDeInicio, anoDeFim) {
    super(duracao, generos)
    this.numeroDeEpisodios = numeroDeEpisodios > 1 ? numeroDeEpisodios : 1
    this.anoDeInicio = anoDeInicio
    this.anoDeFim = anoDeFim > anoDeInicio ? anoDeFim : anoDeInicio
  }
}

const programaX = new Programa(50, ["suspense", "drama", "romance"])

const theOffice = new Seriado(22, ["comédia", "sátira"], 120, 2005, 2012)

console.log(programaX)
console.log(theOffice)