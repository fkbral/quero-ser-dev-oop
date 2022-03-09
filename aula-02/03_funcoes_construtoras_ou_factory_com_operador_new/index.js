// const pessoa1 = {
//   nomeCompleto: "Fulana da Silva",
//   email: "fulanasilva345@gmail.com",
//   get primeiroNome() {
//     return this.nomeCompleto.split(" ")[0]
//   }
// }

// const pessoa2 = {
//   nomeCompleto: "Ciclana de Souza",
//   email: "ciclana__yy@outook.com",
//   get primeiroNome() {
//     return this.nomeCompleto.split(" ")[0]
//   }
// }

// function ConstroiPessoa(nomeCompleto, email) {
function Pessoa(nomeCompleto, email) {
  this.nomeCompleto = nomeCompleto
  this.email = email

  this.cumprimenta = function() {
    console.log('olá ' + this.nomeCompleto)
  }

  // return {
  //   nomeCompleto: this.nomeCompleto,
  //   email: this.email,
  //   get primeiroNome() {
  //     return this.nomeCompleto.split(" ")[0]
  //   },
  //   cumprimenta() {
  //     console.log('olá ' + this.nomeCompleto)
  //   },
  // }
}

const pessoa1 = new Pessoa("Fulana da Silva", "fulanasilva345@gmail.com")
const pessoa2 = new Pessoa("Ciclana de Souza", "ciclana__yy@outook.com")

console.log(pessoa1)
pessoa1.cumprimenta()
console.log(pessoa2)
pessoa2.cumprimenta()