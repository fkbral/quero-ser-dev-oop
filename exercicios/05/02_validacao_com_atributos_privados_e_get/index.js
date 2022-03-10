// Faça uma classe Boletim para uma faculdade com as
// atributos nome (do aluno), ano (maior que 1964),
// semestre(de 1 a 14) e um array medias com as 
// médias de 6 máterias.

// solução que apenas garante validações no instanciamento do
// objeto
class Boletim {
  #ano
  #semestre

  constructor(nome, ano, semestre, medias) {
    this.nome = nome
    this.#ano = ano > 1964 ? ano : 'ano inválido'
    this.#semestre = semestre > 0 && semestre < 15 ? semestre : 'semestre inválido'
    this.medias = medias
  }

  get ano() {
    return this.#ano
  }

  get semestre() {
    return this.#semestre
  }
}

const boletimDaSara = new Boletim(
  "Sara Da Silva", 2019, 8, [8, 9.2, 7.3, 6, 7.7, 5]
)

console.log(boletimDaSara)

boletimDaSara.ano = 2020
boletimDaSara.semestre = 18

console.log(boletimDaSara)