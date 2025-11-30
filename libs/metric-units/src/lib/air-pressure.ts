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

import {
  GRAVITY_ACCELERATION,
  INCHES_PER_FOOT,
  KILOGRAM_PER_POUND,
  MILIMETERS_PER_INCH,
  SQUARE_METERS_PER_SQUARE_INCH,
} from './constants';
import { PressureUnit } from './pressure-unit';
import { validatePressure } from './validation';

/**
 * Converts a pressure value from Pascal (base unit) to the specified unit.
 *
 * @param unit - The target pressure unit to convert to
 * @param value - The pressure value in Pascal (Pa)
 * @returns The pressure value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the pressure is negative
 *
 * @example
 * // Convert 101325 Pa to kPa
 * airPressureToUnit(PressureUnit.KiloPascal, 101325); // Returns 101.325
 *
 * @example
 * // Convert 101325 Pa to Bar
 * airPressureToUnit(PressureUnit.Bar, 101325); // Returns 1.01325
 */
export function airPressureToUnit(unit: PressureUnit, value: number): number {
  validatePressure(value);
  switch (unit) {
    case PressureUnit.Pascal:
      return value;
    case PressureUnit.KiloPascal:
      return value / 1000;
    case PressureUnit.mmH2O:
      return value / 10;
    case PressureUnit.inH2O:
      return value / 10 / MILIMETERS_PER_INCH;
    case PressureUnit.mmHg:
      return (value * 3) / 400;
    case PressureUnit.inHg:
      return (value * 3) / 400 / MILIMETERS_PER_INCH;
    case PressureUnit.Bar:
      return value / 100000;
    case PressureUnit.Psia:
      return ((value / GRAVITY_ACCELERATION) * SQUARE_METERS_PER_SQUARE_INCH) / KILOGRAM_PER_POUND;
    case PressureUnit.ftH2O:
      return value / 10 / MILIMETERS_PER_INCH / INCHES_PER_FOOT;
    case PressureUnit.ftHg:
      return (value * 3) / 400 / MILIMETERS_PER_INCH / INCHES_PER_FOOT;
    default:
      throw new Error(`Unknown air pressure unit ${unit}`);
  }
}

/**
 * Converts a pressure value from the specified unit to Pascal (base unit).
 *
 * @param unit - The source pressure unit to convert from
 * @param value - The pressure value in the specified unit
 * @returns The pressure value converted to Pascal (Pa)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the pressure is negative
 *
 * @example
 * // Convert 101.325 kPa to Pascal
 * airPressureFromUnit(PressureUnit.KiloPascal, 101.325); // Returns 101325
 *
 * @example
 * // Convert 1.01325 Bar to Pascal
 * airPressureFromUnit(PressureUnit.Bar, 1.01325); // Returns 101325
 */
export function airPressureFromUnit(unit: PressureUnit, value: number): number {
  validatePressure(value);
  switch (unit) {
    case PressureUnit.Pascal:
      return value;
    case PressureUnit.KiloPascal:
      return value * 1000;
    case PressureUnit.mmH2O:
      return value * 10;
    case PressureUnit.inH2O:
      return value * 10 * MILIMETERS_PER_INCH;
    case PressureUnit.mmHg:
      return (value / 3) * 400;
    case PressureUnit.inHg:
      return (value / 3) * 400 * MILIMETERS_PER_INCH;
    case PressureUnit.Bar:
      return value * 100000;
    case PressureUnit.Psia:
      return ((value * GRAVITY_ACCELERATION) / SQUARE_METERS_PER_SQUARE_INCH) * KILOGRAM_PER_POUND;
    case PressureUnit.ftH2O:
      return value * 10 * MILIMETERS_PER_INCH * INCHES_PER_FOOT;
    case PressureUnit.ftHg:
      return (value / 3) * 400 * MILIMETERS_PER_INCH * INCHES_PER_FOOT;
    default:
      throw new Error(`Unknown air pressure unit ${unit}`);
  }
}
