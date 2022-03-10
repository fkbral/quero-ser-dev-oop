class Boletim {
  #ano
  #semestre

  constructor(nome, ano, semestre, medias) {
    this.nome = nome
    this.ano = ano
    this.semestre = semestre
    this.medias = medias

    // this.errors = {
    //   ano: null,
    //   semestre: null,
    // }
  }

  get ano() {
    return this.#ano
  }

  set ano(ano) {
    const anoEhValido = ano > 1964

    // if(!anoEhValido) {
      // throw new Error("Ano inválido")
      // this.errors.ano = "ano inválido"
    // }
    this.#ano = ano > 1964 ? ano : 'ano inválido'
  }

  get semestre() {
    return this.#semestre
  }

  set semestre(semestre) {
    this.#semestre = 
      semestre > 0 && semestre < 15 
      ? semestre 
      : 'semestre inválido'
  }
}

const boletimDaSara = new Boletim(
  "Sara Da Silva", 2019, 8, [8, 9.2, 7.3, 6, 7.7, 5]
)

console.log(boletimDaSara)

boletimDaSara.ano = 1900
boletimDaSara.semestre = 18

console.log(boletimDaSara)