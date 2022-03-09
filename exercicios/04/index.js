

class TV {
  constructor(ligada = false, canal = 2, volume = 0) {
    this.ligada = ligada
    this.volume = volume
    this.volumeMaximo = 100
  }

  // constructor() {
  //   this.ligada = false
  //   this.canal = 2
  //   this.volume = 0
  //   this.volumeMaximo = 100
  // }

  liga() {
    this.ligada = true
  }

  desliga() {
    this.ligada = false
  }

  mudaDeCanal(canal) {
    if (!this.ligada) {
      return
    }
    this.canal = canal
  }

  aumentaVolume(incremento = 1) {
    if (!this.ligada) {
      return
    }
    
    if(this.volume + incremento < this.volumeMaximo){
      this.volume += incremento
    }
  }

  diminuiVolume(decremento = 1) {
    if (!this.liga) {
      return
    }

    if (this.volume - decremento >= 0) {
      this.volume -= decremento
    }
  }

}

const tv = new TV(true, 3, 15)
const tv2 = new TV()

console.log('ligada: ' + tv.ligada)
console.log('canal: ' + tv.canal)
console.log('volume: ' + tv.volume)
console.log('\n')
tv.mudaDeCanal(57)
tv.aumentaVolume()

console.log('ligada: ' + tv.ligada)
console.log('canal: ' + tv.canal)
console.log('volume: ' + tv.volume)

console.log('\n')

tv.liga()
tv.mudaDeCanal(50)
tv.aumentaVolume()
console.log('volume: ' + tv.volume)
tv.aumentaVolume(20)
console.log('volume: ' + tv.volume)
tv.aumentaVolume(83)
console.log('volume: ' + tv.volume)
tv.diminuiVolume(10)
console.log('volume: ' + tv.volume)
tv.diminuiVolume(12)
console.log('volume: ' + tv.volume)
tv.diminuiVolume(11)
console.log('volume: ' + tv.volume)
tv.diminuiVolume()
console.log('volume: ' + tv.volume)
console.log('ligada: ' + tv.ligada)
console.log('canal: ' + tv.canal)
console.log('volume: ' + tv.volume)