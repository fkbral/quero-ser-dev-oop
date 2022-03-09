  // function Pessoa(nomeCompleto, email) {
  //   this.nomeCompleto = nomeCompleto
  //   this.email = email
  // }

  class Pessoa {
    constructor(nome, mail) {
      this.nomeCompleto = nome
      this.email = mail
    }

    get primeiroNome() {
      return this.nomeCompleto.split(" ")[0]
    }

    cumprimenta() {
      return 'Olá ' + this.primeiroNome
    }
  }
  
  const pessoa1 = new Pessoa("Fulana da Silva", "fulanasilva345@gmail.com")
  const pessoa2 = new Pessoa("Ciclana de Souza", "ciclana__yy@outook.com")
  const pessoa3 = new Pessoa("Zé de Souza")
  
  console.log(pessoa1)
  console.log(pessoa1.primeiroNome)
  console.log(pessoa2)
  console.log(pessoa2.primeiroNome)
  console.log(pessoa1.cumprimenta())
  console.log(pessoa2.cumprimenta())
  console.log(pessoa3)