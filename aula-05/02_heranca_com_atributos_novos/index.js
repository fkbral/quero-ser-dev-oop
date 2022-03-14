class Animal {
  constructor(especie, idadeEmMeses) {
    this.especie = especie
    this.idadeEmMeses = idadeEmMeses
  }

  comer() {
    console.log("NHAC")
  }
}

class AnimalQueVoa extends Animal {
  constructor(especie, idadeEmMeses, penas) {
    super(especie, idadeEmMeses)
    this.penas = penas
  }
  
  voa() {
    console.log(`${this.especie} voou`)
  }
}

class AnimalQueVoaEAnda extends AnimalQueVoa {
  anda() {
    console.log(`${this.especie} andou`)
  }
}

const lagarto = new Animal("lagarto", 14)
const aguia = new AnimalQueVoaEAnda("águia", 22, 2000)
const morcego = new AnimalQueVoa("morcego", 8, 0)
lagarto.comer()
aguia.voa()
aguia.anda()
morcego.voa()

console.log(lagarto)
console.log(aguia)
console.log(morcego)