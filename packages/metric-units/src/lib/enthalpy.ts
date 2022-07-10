/**
 * Copyright (C) 2022 Adam Pluciński
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published
 *  by the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { KILOGRAM_PER_POUND, SECONDS_PER_HOUR } from './constants';
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

export function enthalpyToUnit(unit: EnthalpyUnit, value: number): number {
  switch (unit) {
    case EnthalpyUnit.KiloJoulesPerKilogram:
      return value;
    case EnthalpyUnit.BritishThermalUnitPerPound:
      return (value / 3.412 / KILOGRAM_PER_POUND) * SECONDS_PER_HOUR;
    default:
      throw Error(`Unknown enthalpy unit ${unit}`);
  }
}

export function enthalpyFromUnit(unit: EnthalpyUnit, value: number): number {
  switch (unit) {
    case EnthalpyUnit.KiloJoulesPerKilogram:
      return value;
    case EnthalpyUnit.BritishThermalUnitPerPound:
      return (value * 3.412 * KILOGRAM_PER_POUND) / SECONDS_PER_HOUR;
    default:
      throw Error(`Unknown enthalpy unit ${unit}`);
  }
}
