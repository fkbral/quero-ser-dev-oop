# Encontrando valores permitidos em um array

```js
const categoriaTeste = "B"
const categoriasValidasOpcao1 = ["A", "B"]
const categoriasValidasOpcao2 = [
  {tipo: "A", nome: "CNH de moto"},
  {tipo: "B", nome: "CNH de carro"},
]
```

Para o primeiro caso, conseguimos verificar se o elemento pertence ao array utilizando includes (serve para qualquer array que tenha como tipo de seus elementos tipos primários: string, number, boolean, null, undefined)

```js
  if(categoriasValidasOpcao1.includes(categoriaTeste)) {
    // código caso encontrar
  }
```

```js
  if(categoriasValidasOpcao1.find(
    categoria => categoria.tipo === categoriaTeste
  )) {
    // código caso encontrar
  }
```
