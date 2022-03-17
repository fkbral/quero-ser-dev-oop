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
  #anoDeFim
  #numeroDeEpisodios

  constructor(duracao, generos, numeroDeEpisodios, anoDeInicio, anoDeFim) {
    super(duracao, generos)
    this.numeroDeEpisodios = numeroDeEpisodios
    this.anoDeInicio = anoDeInicio
    this.anoDeFim = anoDeFim
  }

  get numeroDeEpisodios() {
    return this.#numeroDeEpisodios
  }

  set numeroDeEpisodios(numeroDeEpisodios) {
    this.#numeroDeEpisodios = numeroDeEpisodios > 1 ? numeroDeEpisodios : 1
  }

  get anoDeFim() {
    return this.#anoDeFim
  }

  set anoDeFim(anoDeFim) {
    this.#anoDeFim = anoDeFim > this.anoDeInicio ? anoDeFim : this.anoDeInicio
  }
}

class Filme extends Programa {
  constructor(duracao, generos) {
    super(duracao, generos)
    const minutosExcedentesDeHoras = this.duracao % 60
    const horas = this.duracao - minutosExcedentesDeHoras

    this.duracao = `${horas/60}h ${minutosExcedentesDeHoras}m`
  }
}

const programaX = new Programa(50, ["suspense", "drama", "romance"])

const theOffice = new Seriado(22, ["comédia", "sátira"], 120, 2005, 2012)

const naoOlhePraCima = new Filme(128, ["comédia", "suspense", "drama"])

console.log(programaX)
console.log(theOffice)
console.log(naoOlhePraCima)