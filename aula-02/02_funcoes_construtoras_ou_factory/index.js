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

const pessoa1 = constroiPessoa("Fulana da Silva", "fulanasilva345@gmail.com")
const pessoa2 = constroiPessoa("Ciclana de Souza", "ciclana__yy@outook.com")

function constroiPessoa(nomeCompleto, email) {
  return {
    nomeCompleto,
    email,
    get primeiroNome() {
      return this.nomeCompleto.split(" ")[0]
    }
  }
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.primeiroNome)
console.log(pessoa2.primeiroNome)