// not

export class Ave {
  public bicar(): void {}
  public voar(): void {}
}

export class Pomba extends Ave {
  public voar(): void {}
}

export class Pinguim extends Ave {
  public voar(): void {
    throw new Error();
  }
  public nadar(): void {}
}
