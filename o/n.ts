// not

export class Retangulo {
  constructor(public altura: number, public largura: number) {}
}

export class Circulo {
  constructor(public raio: number) {}
}

export class Area {
  public retangulo(retangulo: Retangulo): number {
    return retangulo.altura * retangulo.largura;
  }

  public circulo(circulo: Circulo): number {
    return Math.PI * (circulo.raio * circulo.raio);
  }
}

const area: Area = new Area();
const retangulo: Retangulo = new Retangulo(10, 10);
const calc: number = area.retangulo(retangulo);
