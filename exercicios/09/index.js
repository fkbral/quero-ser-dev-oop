class Veiculo {
  constructor(rodas, usaCombustivel) {
    this.rodas = rodas >= 1 ? rodas : 1
    this.usaCombustivel = typeof usaCombustivel === "boolean" ? usaCombustivel : false 
  }
}

const veiculoGenerico = new Veiculo(1, false)

console.log(veiculoGenerico)