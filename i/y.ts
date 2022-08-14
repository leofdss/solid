// yes

export interface IBicar {
  bicar(): void;
}

export interface IVoar {
  voar(): void;
}

export interface INadar {
  nadar(): void;
}

export class PombaImpl implements IBicar, IVoar {
  public bicar(): void {}
  public voar(): void {}
}

export class PinguimImpl implements IBicar, INadar {
  public bicar(): void {}
  public nadar(): void {}
}
