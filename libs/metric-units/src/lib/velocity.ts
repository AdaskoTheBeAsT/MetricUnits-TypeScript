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

import { METERS_PER_FOOT, SECONDS_PER_HOUR, SECONDS_PER_MINUTE } from './constants';
import { validateFiniteNumber } from './validation';
import { VelocityUnit } from './velocity-unit';

/**
 * Meters per kilometer.
 */
const METERS_PER_KILOMETER = 1000;

/**
 * Meters per mile.
 * 1 mile = 1609.344 meters
 */
const METERS_PER_MILE = 1609.344;

/**
 * Converts a velocity value from m/s (base unit) to the specified unit.
 *
 * @param unit - The target velocity unit to convert to
 * @param value - The velocity value in meters per second (m/s)
 * @returns The velocity value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1 m/s to ft/min
 * velocityToUnit(VelocityUnit.FeetPerMinute, 1); // Returns ~196.85
 *
 * @example
 * // Convert 1 m/s to km/h
 * velocityToUnit(VelocityUnit.KilometersPerHour, 1); // Returns 3.6
 */
export function velocityToUnit(unit: VelocityUnit, value: number): number {
  validateFiniteNumber(value, 'velocity');
  switch (unit) {
    case VelocityUnit.MetersPerSecond:
      return value;
    case VelocityUnit.FeetPerMinute:
      return (value / METERS_PER_FOOT) * SECONDS_PER_MINUTE;
    case VelocityUnit.FeetPerSecond:
      return value / METERS_PER_FOOT;
    case VelocityUnit.KilometersPerHour:
      return (value / METERS_PER_KILOMETER) * SECONDS_PER_HOUR;
    case VelocityUnit.MilesPerHour:
      return (value / METERS_PER_MILE) * SECONDS_PER_HOUR;
    default:
      throw new Error(`Unknown velocity unit ${unit}`);
  }
}

/**
 * Converts a velocity value from the specified unit to m/s (base unit).
 *
 * @param unit - The source velocity unit to convert from
 * @param value - The velocity value in the specified unit
 * @returns The velocity value converted to meters per second (m/s)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 196.85 ft/min to m/s
 * velocityFromUnit(VelocityUnit.FeetPerMinute, 196.85); // Returns ~1
 *
 * @example
 * // Convert 3.6 km/h to m/s
 * velocityFromUnit(VelocityUnit.KilometersPerHour, 3.6); // Returns 1
 */
export function velocityFromUnit(unit: VelocityUnit, value: number): number {
  validateFiniteNumber(value, 'velocity');
  switch (unit) {
    case VelocityUnit.MetersPerSecond:
      return value;
    case VelocityUnit.FeetPerMinute:
      return (value * METERS_PER_FOOT) / SECONDS_PER_MINUTE;
    case VelocityUnit.FeetPerSecond:
      return value * METERS_PER_FOOT;
    case VelocityUnit.KilometersPerHour:
      return (value * METERS_PER_KILOMETER) / SECONDS_PER_HOUR;
    case VelocityUnit.MilesPerHour:
      return (value * METERS_PER_MILE) / SECONDS_PER_HOUR;
    default:
      throw new Error(`Unknown velocity unit ${unit}`);
  }
}
