const pessoa = {
  nomeCompleto: "Fulana da Silva",
  email: "fulanasilva345@gmail.com",
  get primeiroNome() {
    // const nome = this.nomeCompleto.split(" ")[0]
    // return nome
    return this.nomeCompleto.split(" ")[0]
  }
}

console.log(pessoa.email)