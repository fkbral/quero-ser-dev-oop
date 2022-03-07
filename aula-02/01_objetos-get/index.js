const usuario = {
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

console.log(usuario)
console.log(usuario.nomeDeUsuario)

// Notem que o meu valor de nomeDeUsuario não é sobrescrito
usuario.nomeDeUsuario = "blabla"
console.log(usuario.nomeDeUsuario)