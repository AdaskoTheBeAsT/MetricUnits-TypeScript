export enum EnthalpyUnit {
  KiloJoulesPerKilogram,
  BritishThermalUnitPerPound,
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EnthalpyUnit {
  export function getLabel(value: EnthalpyUnit): string {
    switch (value) {
      case EnthalpyUnit.KiloJoulesPerKilogram:
        return 'kJ/kg';
      case EnthalpyUnit.BritishThermalUnitPerPound:
        return 'Btu/lb';
      default:
        throw new Error(`${value} of type EnthalpyUnit has no label`);
    }
  }
}

export default EnthalpyUnit;
