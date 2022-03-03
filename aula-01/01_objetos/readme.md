# Objetos

## O que sabíamos até o momento
Nós podemos definir propriedades/atributos dos objetos utilizando a sintaxe:
nomeDaPropriedade: valor

```js
const aluno = {
  nome: 'Maria',
  idade: 22,
}
```

Também sabíamos que podemos acessar os valores das propriedades como abaixo:
```js
const propriedade = "nome"
console.log(aluno.nome)
console.log(aluno["nome"])
console.log(aluno[propriedade])

console.log(aluno.idade)
console.log(aluno["idade"])
```

Além disso podemos criar novas propriedades desta forma:
```js
aluno.email = "maria_fulana@outlook.com"
aluno["email"] = "maria_fulana@outlook.com"
```

## Novidades

Podemos associar uma ou mais funções a um objeto da seguinte forma:

```js
// Na criação do objeto
const aluno = {
  nome: 'Maria',
  idade: 22,
  cumprimenta() {
    console.log('Olá, ' + this.nome)
  }
}
```

```js
// Ou depois que o objeto foi criado
aluno.cumprimenta = function() {
  console.log('Olá, ' + this.nome)
}
```