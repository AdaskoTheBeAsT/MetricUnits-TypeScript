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

import { BTU_PER_WATT_HOUR } from './constants';
import { PowerUnit } from './power-unit';
import { validateFiniteNumber } from './validation';

/**
 * Watts per horsepower (mechanical).
 * 1 hp = 745.7 W
 */
const WATTS_PER_HORSEPOWER = 745.7;

/**
 * Watts per ton of refrigeration.
 * 1 TR = 3516.85 W (12000 BTU/h)
 */
const WATTS_PER_TON_OF_REFRIGERATION = 3516.85;

/**
 * Converts a power value from Watts (base unit) to the specified unit.
 *
 * @param unit - The target power unit to convert to
 * @param value - The power value in Watts (W)
 * @returns The power value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1000 W to kW
 * powerToUnit(PowerUnit.Kilowatt, 1000); // Returns 1
 *
 * @example
 * // Convert 1000 W to BTU/h
 * powerToUnit(PowerUnit.BtuPerHour, 1000); // Returns ~3412
 */
export function powerToUnit(unit: PowerUnit, value: number): number {
  validateFiniteNumber(value, 'power');
  switch (unit) {
    case PowerUnit.Watt:
      return value;
    case PowerUnit.Kilowatt:
      return value / 1000;
    case PowerUnit.BtuPerHour:
      return value * BTU_PER_WATT_HOUR;
    case PowerUnit.Horsepower:
      return value / WATTS_PER_HORSEPOWER;
    case PowerUnit.TonOfRefrigeration:
      return value / WATTS_PER_TON_OF_REFRIGERATION;
    default:
      throw new Error(`Unknown power unit ${unit}`);
  }
}

/**
 * Converts a power value from the specified unit to Watts (base unit).
 *
 * @param unit - The source power unit to convert from
 * @param value - The power value in the specified unit
 * @returns The power value converted to Watts (W)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1 kW to W
 * powerFromUnit(PowerUnit.Kilowatt, 1); // Returns 1000
 *
 * @example
 * // Convert 3412 BTU/h to W
 * powerFromUnit(PowerUnit.BtuPerHour, 3412); // Returns ~1000
 */
export function powerFromUnit(unit: PowerUnit, value: number): number {
  validateFiniteNumber(value, 'power');
  switch (unit) {
    case PowerUnit.Watt:
      return value;
    case PowerUnit.Kilowatt:
      return value * 1000;
    case PowerUnit.BtuPerHour:
      return value / BTU_PER_WATT_HOUR;
    case PowerUnit.Horsepower:
      return value * WATTS_PER_HORSEPOWER;
    case PowerUnit.TonOfRefrigeration:
      return value * WATTS_PER_TON_OF_REFRIGERATION;
    default:
      throw new Error(`Unknown power unit ${unit}`);
  }
}
