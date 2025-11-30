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

import { SpecificHumidityUnit } from './specific-humidity-unit';
import { validateSpecificHumidity } from './validation';

/**
 * Converts a specific humidity value from g/kg (base unit) to the specified unit.
 *
 * @param unit - The target specific humidity unit to convert to
 * @param value - The specific humidity value in grams per kilogram (g/kg)
 * @returns The specific humidity value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the specific humidity is negative
 *
 * @example
 * // Convert 10 g/kg to kg/kg
 * specificHumidityToUnit(SpecificHumidityUnit.KilogramsPerKilogram, 10); // Returns 0.01
 */
export function specificHumidityToUnit(unit: SpecificHumidityUnit, value: number): number {
  validateSpecificHumidity(value);
  switch (unit) {
    case SpecificHumidityUnit.GramsPerKilogram:
      return value;
    case SpecificHumidityUnit.KilogramsPerKilogram:
      return value / 1000;
    case SpecificHumidityUnit.PoundsPerPound:
      return value / 1000;
    default:
      throw new Error(`Unknown specific humidity unit ${unit}`);
  }
}

/**
 * Converts a specific humidity value from the specified unit to g/kg (base unit).
 *
 * @param unit - The source specific humidity unit to convert from
 * @param value - The specific humidity value in the specified unit
 * @returns The specific humidity value converted to grams per kilogram (g/kg)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the specific humidity is negative
 *
 * @example
 * // Convert 0.01 kg/kg to g/kg
 * specificHumidityFromUnit(SpecificHumidityUnit.KilogramsPerKilogram, 0.01); // Returns 10
 */
export function specificHumidityFromUnit(unit: SpecificHumidityUnit, value: number): number {
  validateSpecificHumidity(value);
  switch (unit) {
    case SpecificHumidityUnit.GramsPerKilogram:
      return value;
    case SpecificHumidityUnit.KilogramsPerKilogram:
      return value * 1000;
    case SpecificHumidityUnit.PoundsPerPound:
      return value * 1000;
    default:
      throw new Error(`Unknown specific humidity unit ${unit}`);
  }
}
