class Estabelecimento {
  constructor(id, produtos) {
    this.id = id
    this.produtos = produtos
  }
}

class Prescricao {
  constructor(remedios) {
    this.remedios = remedios
  }
}

class Cartela {
  constructor(idDoEstabelecimento, carimbos) {
    this.idDoEstabelecimento = idDoEstabelecimento
    this.carimbos = carimbos
  }
}

function MixinPremios(superClasse) {
  return class extends superClasse {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos)
      this.pontosParaResgatarPremio = pontosParaResgatarPremio
    }

    resgataPremio(cartela) {
      if (cartela.idDoEstabelecimento !== this.id) {
        console.log("cartela não vale para o estabelecimento")
        return
      }

      if (cartela.carimbos < this.pontosParaResgatarPremio) {
        console.log("cartela não tem pontos suficientes para resgate")
        return
      }

      cartela.carimbos = cartela.carimbos - this.pontosParaResgatarPremio
      console.log("Você resgatou prêmio")
    }
  }
}

function MixinBebidas(superClasse) {
  return class extends superClasse {
    pedeBebida(idade, produto) {
      if (idade < 18) {
        console.log("Você não tem idade para beber")
        return
      }

      if (!this.produtos.includes(produto.toLowerCase())) {
        console.log(`${produto.toLowerCase()} não está disponível`)
        return
      }

      console.log(`${produto.toLowerCase()} foi servido`)
    }
  }
}

function MixinRemedios(superClasse) {
  return class extends superClasse {
    compraRemedios(prescricao, remedios) {
      const remediosQueTemPrescricao = remedios.filter((remedio) => {
        return prescricao.includes(remedio)
      })

      const remediosQuePodemSerVendidos = remediosQueTemPrescricao.filter((remedio) => {
        return this.produtos.includes(remedio)
      })

      console.log(`${remediosQuePodemSerVendidos} foram vendidos`)
    }
  }
}

class Restaurante extends MixinPremios(Estabelecimento) {}

class Bar extends MixinPremios(MixinBebidas(Estabelecimento)) {}

class Farmacia extends MixinRemedios(Estabelecimento) {}

const outback = new Restaurante(
  1,
  ["batata frita", "onion rings", "costelinha barbecue"],
  5,
)

const cartelaDoOutbackDaMaria = new Cartela(1, 6)

const barDoZeca = new Bar(
  2,
  ["cerveja", "vinho", "gin tônica", "cachaça"],
  3,
)


outback.resgataPremio(cartelaDoOutbackDaMaria)
console.log(cartelaDoOutbackDaMaria)

barDoZeca.pedeBebida(14, "cerveja")
barDoZeca.pedeBebida(20, "VINHO")
barDoZeca.pedeBebida(22, "saquerinha")

const drogaraia = new Farmacia(
  3,
  ["antibiótico", "vitamina C", "desodorante", "shampoo", "relaxante muscular", "prozac"]
  )

const prescricaoDaMaria = new Prescricao(["antibiótico", "vitamina C"])

drogaraia.compraRemedios(prescricaoDaMaria.remedios, ["antibiótico", "vitamina C", "prozac"])