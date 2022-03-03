const arCondicionado = {
  ligado: false,
  temperaturaAtual: 20,
  temperaturaMinimaEmCelsius: 16,
  temperaturaMaximaEmCelsius: 25,
  liga() {
    this.ligado = true
  },
  desliga() {
    this.ligado = false
  },
  aumentaTemperatura() {
    // if(this.ligado === false) {
    if(!this.ligado) { // guard clause
      return
    }

    if(this.temperaturaAtual < this.temperaturaMaximaEmCelsius) {
      this.temperaturaAtual += 1
    }
  },
  diminuiTemperatura() {
    if(!this.ligado) {
      return
    }

    if(this.temperaturaAtual > this.temperaturaMinimaEmCelsius) {
      this.temperaturaAtual -= 1
    }
  }
}

console.log(arCondicionado.ligado)
arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.liga()

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.diminuiTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.diminuiTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.desliga()

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)

arCondicionado.liga()

arCondicionado.aumentaTemperatura()
console.log(arCondicionado.temperaturaAtual)