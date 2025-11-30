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

import { METERS_PER_FOOT } from './constants';
import { HeightUnit } from './height-unit';
import { validateFiniteNumber } from './validation';

/**
 * Converts a height/length value from meters (base unit) to the specified unit.
 *
 * @param unit - The target height unit to convert to
 * @param value - The height value in meters
 * @returns The height value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1 meter to feet
 * heightToUnit(HeightUnit.Feet, 1); // Returns ~3.28084
 */
export function heightToUnit(unit: HeightUnit, value: number): number {
  validateFiniteNumber(value, 'height');
  switch (unit) {
    case HeightUnit.Meters:
      return value;
    case HeightUnit.Feet:
      return value / METERS_PER_FOOT;
    default:
      throw new Error(`Unknown height unit ${unit}`);
  }
}

/**
 * Converts a height/length value from the specified unit to meters (base unit).
 *
 * @param unit - The source height unit to convert from
 * @param value - The height value in the specified unit
 * @returns The height value converted to meters
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1 foot to meters
 * heightFromUnit(HeightUnit.Feet, 1); // Returns ~0.3048
 */
export function heightFromUnit(unit: HeightUnit, value: number): number {
  validateFiniteNumber(value, 'height');
  switch (unit) {
    case HeightUnit.Meters:
      return value;
    case HeightUnit.Feet:
      return value * METERS_PER_FOOT;
    default:
      throw new Error(`Unknown height unit ${unit}`);
  }
}
