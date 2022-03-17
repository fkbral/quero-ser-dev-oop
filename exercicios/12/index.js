class Dispositivo {
  calcula() {}
}

function MixinIluminacao(superClasse) {
  return class extends superClasse {
    ilumina() {}
  }
}

function MixinIntenet(superClasse) {
  return class extends superClasse {
    acessaInternet() {}
  }
}

function MixinFotos(superClasse) {
  return class extends superClasse {
    tiraFoto() {}
  }
}

function MixinPassos(superClasse) {
  return class extends superClasse {
    registraPassos() {}
  }
}

class Relogio extends(MixinIntenet(MixinPassos(Dispositivo))) {}

class Computador extends(MixinIntenet(MixinFotos(Dispositivo))) {}

class Celular extends(MixinIluminacao(MixinFotos(MixinIntenet(MixinPassos(Dispositivo))))) {}

const smartWatch = new Relogio()
const mac = new Computador()
const s10 = new Celular()

s10.calcula()
s10.ilumina()
s10.acessaInternet()
s10.tiraFoto()
s10.registraPassos()

mac.calcula()
// mac.ilumina()
mac.acessaInternet()
mac.tiraFoto()
// mac.registraPassos()

smartWatch.calcula()
// smartWatch.ilumina()
smartWatch.acessaInternet()
// smartWatch.tiraFoto()
smartWatch.registraPassos()

console.log(smartWatch)
console.log(mac)
console.log(s10)