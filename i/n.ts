// not

export interface IAve {
  bicar(): void;
  voar(): void;
}

export class PombaImpl implements IAve {
  public bicar(): void {}
  public voar(): void {}
}

export class PinguimImpl implements IAve {
  public bicar(): void {}
  public voar(): void {
    // nada para fazer
  }
}
