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
