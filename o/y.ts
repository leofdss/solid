// yes

export interface IPlugin {
  area(): number;
}

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

export class Area {
  public calc(object: IPlugin): number {
    return object.area();
  }
}
