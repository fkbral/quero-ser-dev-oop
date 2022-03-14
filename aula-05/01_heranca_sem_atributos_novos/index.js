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
  voa() {
    console.log(`${this.especie} voou`)
  }
}

const lagarto = new Animal("lagarto", 14)
const aguia = new AnimalQueVoa("águia", 22)
lagarto.comer()
aguia.voa()

console.log(lagarto)
console.log(aguia)