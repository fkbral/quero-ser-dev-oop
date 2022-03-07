// Faça um objeto TV com as propriedades canal, volume e ligada e métodos 
// liga, desliga, mudaDeCanal, aumentaVolume e diminuiVolume.

const tv = {
  ligada: false,
  canal: 2,
  volume: 0,
  volumeMaximo: 100,
  liga() {
    this.ligada = true
  },
  desliga() {
    this.ligada = false
  },
  mudaDeCanal(canal) {
    // && (and)
    // || (or)
    // ! (not)
    // 
    if (!this.ligada) {
      return
    }
    this.canal = canal
  },
  // aumentaVolume() {
  //   if (!this.ligada) {
  //     return
  //   }
    
  //   if(this.volume < this.volumeMaximo){
  //     this.volume += 1
  //   }
  // },
  aumentaVolume(incremento = 1) {
    if (!this.ligada) {
      return
    }
    
    if(this.volume + incremento < this.volumeMaximo){
      this.volume += incremento
    }
  },
  diminuiVolume(decremento = 1) {
    if (!this.liga) {
      return
    }

    if (this.volume - decremento >= 0) {
      this.volume -= decremento
    }
  }

}

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