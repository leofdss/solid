// yes

export interface IDev {
  escrever(): void;
}

export class FrontendDevImpl implements IDev {
  private escreverHtml(): void { }
  public escrever(): void {
    this.escreverHtml();
  }
}

export class Backenddev {
  private escreverJava(): void { }
  public escrever(): void {
    this.escreverJava();
  }
}

export class Projeto {
  public devs: IDev[];

  public create(): void {
    this.devs.forEach((e: IDev) => {
      e.escrever();
    })
  }
}
