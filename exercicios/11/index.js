class Livro {
  constructor(autor, ano) {
    this.autor = autor
    this.ano = ano
  }
}

class Ebook extends Livro {
  constructor(autor, ano, numeroDePaginas, numeroDeCapitulos) {
    super(autor, ano)
    this.numeroDePaginas = numeroDePaginas
    this.numeroDeCapitulos = numeroDeCapitulos
  }
}

class AudioBook extends Livro {
  constructor(autor, ano, duracaoDoAudioEmMinutos) {
    super(autor, ano)
    this.duracaoDoAudioEmMinutos = duracaoDoAudioEmMinutos
  }
}