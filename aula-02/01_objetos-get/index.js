const usuario1 = {
  nome: 'Zé Da Silva',
  email: 'zesilva123@outlook.com',
  get nomeDeUsuario() {
    const emailArray = this.email.split('@')
    return emailArray[0]
    // return this.email.split('@')[0]
  },
  cumprimenta() {
    console.log('olá ' + this.nome)
  }
}

const usuario2 = {
  nome: 'Maria De Souza',
  email: 'maria881@outlook.com',
  get nomeDeUsuario() {
    const emailArray = this.email.split('@')
    return emailArray[0]
    // return this.email.split('@')[0]
  },
  cumprimenta() {
    console.log('olá ' + this.nome)
  }
}

console.log(usuario1)
console.log(usuario1.nomeDeUsuario)

// Notem que o meu valor de nomeDeUsuario não é sobrescrito
usuario1.nomeDeUsuario = "blabla"
console.log(usuario1.nomeDeUsuario)