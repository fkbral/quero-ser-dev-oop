class Animal {
  constructor(especie, idadeEmMeses) {
    this.especie = especie
    this.idadeEmMeses = idadeEmMeses
  }

  comer() {
    console.log("NHAC")
  }
}

function MixinVoa(superClasse) {
  return class extends superClasse {
    voa() {
      console.log(`${this.especie} voou`)
    }
  }
}

function MixinAnda(superClasse) {
  return class extends superClasse {
    anda() {
      console.log(`${this.especie} andou`)
    }
  }
}

function MixinNada(superClasse) {
  return class extends superClasse {
    nada() {
      console.log(`${this.especie} nadou`)
    }
  }
}

class Ave extends MixinAnda(MixinVoa(Animal)) {}
class AveTerrestre extends MixinAnda(Animal) {}
class AveQueFazTudo extends MixinNada(MixinAnda(MixinVoa(Animal))) {}

const aguia = new Ave("aguia", 8)
const pinguim = new AveTerrestre("pinguim", 14)
const ema = new AveTerrestre("ema", 20)
const pato = new AveQueFazTudo("pato", 4)
const ganso = new AveQueFazTudo("ganso", 6)

console.log(aguia)
console.log(pinguim)
console.log(ema)
console.log(pato)
console.log(ganso)

aguia.voa()
aguia.anda()
pinguim.anda()
ema.anda()

pato.anda()
pato.voa()
pato.nada()

ganso.anda()
ganso.voa()
ganso.nada()