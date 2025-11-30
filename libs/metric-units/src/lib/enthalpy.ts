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

import { BTU_PER_WATT_HOUR, KILOGRAM_PER_POUND, SECONDS_PER_HOUR } from './constants';
import { EnthalpyUnit } from './enthalpy-unit';
import { validateFiniteNumber } from './validation';

/**
 * Converts an enthalpy value from kJ/kg (base unit) to the specified unit.
 *
 * @param unit - The target enthalpy unit to convert to
 * @param value - The enthalpy value in kilojoules per kilogram (kJ/kg)
 * @returns The enthalpy value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 100 kJ/kg to BTU/lb
 * enthalpyToUnit(EnthalpyUnit.BritishThermalUnitPerPound, 100);
 */
export function enthalpyToUnit(unit: EnthalpyUnit, value: number): number {
  validateFiniteNumber(value, 'enthalpy');
  switch (unit) {
    case EnthalpyUnit.KiloJoulesPerKilogram:
      return value;
    case EnthalpyUnit.BritishThermalUnitPerPound:
      return (value / BTU_PER_WATT_HOUR / KILOGRAM_PER_POUND) * SECONDS_PER_HOUR;
    default:
      throw new Error(`Unknown enthalpy unit ${unit}`);
  }
}

/**
 * Converts an enthalpy value from the specified unit to kJ/kg (base unit).
 *
 * @param unit - The source enthalpy unit to convert from
 * @param value - The enthalpy value in the specified unit
 * @returns The enthalpy value converted to kilojoules per kilogram (kJ/kg)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 100 BTU/lb to kJ/kg
 * enthalpyFromUnit(EnthalpyUnit.BritishThermalUnitPerPound, 100);
 */
export function enthalpyFromUnit(unit: EnthalpyUnit, value: number): number {
  validateFiniteNumber(value, 'enthalpy');
  switch (unit) {
    case EnthalpyUnit.KiloJoulesPerKilogram:
      return value;
    case EnthalpyUnit.BritishThermalUnitPerPound:
      return (value * BTU_PER_WATT_HOUR * KILOGRAM_PER_POUND) / SECONDS_PER_HOUR;
    default:
      throw new Error(`Unknown enthalpy unit ${unit}`);
  }
}
