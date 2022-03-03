//podemos servir refris P (300mL),M (500mL) ou G (700mL) 

const maquinaDeRefri = {
  estoqueEmLitros: {
    coca: 40,
    sprite: 5,
  },
  tamanhoDeCopos : {
    P: 0.3,
    M: 0.5,
    G: 0.7,
  },
  serve(refri, tamanho) {
    // console.log(refri)
    // console.log(this.estoqueEmLitros[refri])
    // console.log(tamanho)
    // console.log(this.tamanhoDeCopos[tamanho])

    if(this.estoqueEmLitros[refri] !== 0 
      && (!this.estoqueEmLitros[refri] || !this.tamanhoDeCopos[tamanho])) {
      return
    }

    if(this.estoqueEmLitros[refri] < this.tamanhoDeCopos[tamanho]) {
      console.log('Acabou o refrigerante ' + refri + ' e cliente não foi servido')
      return
    }

    // this.estoqueEmLitros[refri] = this.estoqueEmLitros[refri] - this.tamanhoDeCopos[tamanho]
    this.estoqueEmLitros[refri] -= this.tamanhoDeCopos[tamanho]
  }
}

maquinaDeRefri.serve('pepsi', 'P')
maquinaDeRefri.serve('coca', 'MG')
console.log(maquinaDeRefri.estoqueEmLitros)

console.log(maquinaDeRefri.estoqueEmLitros)
maquinaDeRefri.serve('coca', 'P')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('coca', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)

maquinaDeRefri.serve('sprite', 'M')
console.log(maquinaDeRefri.estoqueEmLitros)