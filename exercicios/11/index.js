class Livro {
  constructor(autor, ano) {
    this.autor = autor
    this.ano = ano
  }
}

class Ebook extends Livro {
  #numeroDeCapitulos

  constructor(autor, ano, numeroDePaginas, numeroDeCapitulos) {
    super(autor, ano)
    this.numeroDePaginas = numeroDePaginas
    this.numeroDeCapitulos = numeroDeCapitulos
  }

  get numeroDeCapitulos() {
    return this.#numeroDeCapitulos
  }

  set numeroDeCapitulos(numeroDeCapitulos) {
    this.#numeroDeCapitulos = 
      numeroDeCapitulos >= numeroDePaginas ? numeroDeCapitulos : numeroDePaginas
  }
}

class AudioBook extends Livro {
  #duracaoDoAudioEmMinutos

  constructor(autor, ano, duracaoDoAudioEmMinutos) {
    super(autor, ano)
    this.duracaoDoAudioEmMinutos = duracaoDoAudioEmMinutos
  }

  get duracaoDoAudioEmMinutos() {
    return this.#duracaoDoAudioEmMinutos
  }

  set duracaoDoAudioEmMinutos(duracaoDoAudioEmMinutos) {
    this.#duracaoDoAudioEmMinutos = 
      duracaoDoAudioEmMinutos > 0 ? duracaoDoAudioEmMinutos : 1
  }
}