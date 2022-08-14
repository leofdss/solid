// yes

export interface IPlugin {
  area(): number;
}

export class Area {
  public calc(object: IPlugin): number {
    return object.area();
  }
}

////

export class RetanguloImpl implements IPlugin {
  constructor(public altura: number, public largura: number) {}
  area(): number {
    return this.altura * this.largura;
  }
}

export class CirculoImpl implements IPlugin {
  constructor(public raio: number) {}
  area(): number {
    return Math.PI * (this.raio * this.raio); 
  }
}

const area: Area = new Area();
const retangulo: RetanguloImpl = new RetanguloImpl(10, 10);
const calc: number = area.calc(retangulo);
