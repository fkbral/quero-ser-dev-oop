const pessoa = {
  nomeCompleto: "Fulana da Souza da Silva",
  // nomeCompleto: "Fulana Souza d'Angelo",
  // nomeCompleto: "Fulana Souza Yara",
  email: "fulanasilva345@gmail.com",
  get primeiroNome() {
    // const nome = this.nomeCompleto.split(" ")[0]
    // return nome
    return this.nomeCompleto.split(" ")[0]
  },
  get ultimoNome() {
    // solução 1
    // const nomes = this.nomeCompleto.split(" ")
    // const ultimoNome = nomes[nomes.length - 1]
    // return ultimoNome

    // solução 2
    // return this.nomeCompleto.split(" ").reverse()[0]

    // solução 3
    const nomes = this.nomeCompleto.split(" ")

    const nomesAjustadosRepetidos = nomes.map((nome, indice, array) => {
      const indiceAnterior = indice - 1
      if(indiceAnterior < 0) {
        return nome
      }

      const primeiraLetraDoNomeAnterior = array[indiceAnterior][0]

      if (primeiraLetraDoNomeAnterior === primeiraLetraDoNomeAnterior.toLowerCase()) {
        return array[indiceAnterior] + " " + nome
      }

      return nome
    })
    
    const nomesAjustados = nomesAjustadosRepetidos.filter((nome) => {
      const nomesArray = nome.split(' ')

      if(nomesArray.length > 1) {
        return true
      }

      if (nome[0] === nome[0].toLowerCase()) {
        return false
      }

      return true
    })

    console.log(nomesAjustados)

    const ultimoNome = nomesAjustados[nomesAjustados.length - 1]
    return ultimoNome
  }
}

console.log(pessoa.primeiroNome)
console.log(pessoa.ultimoNome)