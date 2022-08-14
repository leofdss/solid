// not

export class FrontendDev {
  public escreverHtml(): void {}
}

export class Backenddev {
  public escreverJava(): void {}
}

export class Projeto {
  public frontendDev: FrontendDev;
  public backendDev: Backenddev;

  constructor() {
    this.frontendDev = new FrontendDev();
    this.backendDev = new Backenddev();
  }

  public create(): void {
    this.frontendDev.escreverHtml();
    this.backendDev.escreverJava();
  }
}
