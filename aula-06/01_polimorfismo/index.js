class Pessoa {
  constructor(nome, email) {
    this.nome = nome
    this.email = email
  }
}

class AlunoOuProfessor extends Pessoa{
  registraPresenca() {
    console.log(`${this.nome} está presente na aula atual`)
  }
}

class Aluno extends AlunoOuProfessor {
  constructor(nome, email, materiaAtual) {
    super(nome, email)
    this.materiaAtual = materiaAtual
  }
}

class Professor extends AlunoOuProfessor {
  registraPresenca() {
    console.log(`${this.nome} fez chamada`)
  }
}

const clarice = new Pessoa("Clarice", "clarice333@uol.com")
const maria = new Aluno("Maria", "marialfa12@gmail.com", "POO")
const larissa = new Professor("Larissa", "larissa3123@hotmail.com")

console.log(clarice)
console.log(maria)
console.log(larissa)

// clarice.registraPresenca()
maria.registraPresenca()
larissa.registraPresenca()