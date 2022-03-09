// nome: Janeiro, Fevereiro, Março, etc
// numeroDoMes: 1-12
// dias: 28, 29, 30 e 31
// diaDeSemanaQueInicia
// diaDeSemanaQueTermina
class Mes {
  #numeroDoMes
  #dias

  constructor(nome, numeroDoMes, dias) {
    this.nome = nome
    this.#numeroDoMes = this.validaNumeroDoMes(numeroDoMes)
    this.#dias = this.validaDias(dias)
  }

  get numeroDoMes() {
    return this.#numeroDoMes
  }

  set numeroDoMes(numeroDoMes) {
    this.#numeroDoMes = this.validaNumeroDoMes(numeroDoMes)
  }

  validaNumeroDoMes(numeroDoMes) {
    return (numeroDoMes > 0 && numeroDoMes < 13) ? numeroDoMes : 1
  }

  get dias() {
    return this.#dias
  }

  set dias(numero) {
    this.#dias = this.validaDias(numero)
  }

  validaDias(numero) {
    return numero > 27 && numero < 32 ? numero : 30
  }
}

const jan = new Mes("Janeiro", 14, 31)
const fev = new Mes("Fevereiro", 2, 28)

console.log(jan)

jan.numeroDoMes = 16
jan.dias = 33

console.log(jan)
console.log(fev)