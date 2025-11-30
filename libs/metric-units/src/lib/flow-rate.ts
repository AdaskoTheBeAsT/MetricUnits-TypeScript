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
  CUBIC_METERS_PER_CUBIC_FOOT,
  LITERS_PER_CUBIC_METER,
  LITERS_PER_GALLON,
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
} from './constants';
import { FlowRateUnit } from './flow-rate-unit';
import { validateFiniteNumber } from './validation';

/**
 * Converts a flow rate value from m³/s (base unit) to the specified unit.
 *
 * @param unit - The target flow rate unit to convert to
 * @param value - The flow rate value in cubic meters per second (m³/s)
 * @returns The flow rate value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 1 m³/s to CFM
 * flowRateToUnit(FlowRateUnit.CubicFeetPerMinute, 1); // Returns ~2118.88
 *
 * @example
 * // Convert 1 m³/s to L/s
 * flowRateToUnit(FlowRateUnit.LitersPerSecond, 1); // Returns 1000
 */
export function flowRateToUnit(unit: FlowRateUnit, value: number): number {
  validateFiniteNumber(value, 'flow rate');
  switch (unit) {
    case FlowRateUnit.CubicMetersPerSecond:
      return value;
    case FlowRateUnit.CubicMetersPerHour:
      return value * SECONDS_PER_HOUR;
    case FlowRateUnit.CubicFeetPerMinute:
      return (value / CUBIC_METERS_PER_CUBIC_FOOT) * SECONDS_PER_MINUTE;
    case FlowRateUnit.LitersPerSecond:
      return value * LITERS_PER_CUBIC_METER;
    case FlowRateUnit.LitersPerMinute:
      return value * LITERS_PER_CUBIC_METER * SECONDS_PER_MINUTE;
    case FlowRateUnit.GallonsPerMinute:
      return (value * LITERS_PER_CUBIC_METER * SECONDS_PER_MINUTE) / LITERS_PER_GALLON;
    default:
      throw new Error(`Unknown flow rate unit ${unit}`);
  }
}

/**
 * Converts a flow rate value from the specified unit to m³/s (base unit).
 *
 * @param unit - The source flow rate unit to convert from
 * @param value - The flow rate value in the specified unit
 * @returns The flow rate value converted to cubic meters per second (m³/s)
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 *
 * @example
 * // Convert 2118.88 CFM to m³/s
 * flowRateFromUnit(FlowRateUnit.CubicFeetPerMinute, 2118.88); // Returns ~1
 *
 * @example
 * // Convert 1000 L/s to m³/s
 * flowRateFromUnit(FlowRateUnit.LitersPerSecond, 1000); // Returns 1
 */
export function flowRateFromUnit(unit: FlowRateUnit, value: number): number {
  validateFiniteNumber(value, 'flow rate');
  switch (unit) {
    case FlowRateUnit.CubicMetersPerSecond:
      return value;
    case FlowRateUnit.CubicMetersPerHour:
      return value / SECONDS_PER_HOUR;
    case FlowRateUnit.CubicFeetPerMinute:
      return (value * CUBIC_METERS_PER_CUBIC_FOOT) / SECONDS_PER_MINUTE;
    case FlowRateUnit.LitersPerSecond:
      return value / LITERS_PER_CUBIC_METER;
    case FlowRateUnit.LitersPerMinute:
      return value / LITERS_PER_CUBIC_METER / SECONDS_PER_MINUTE;
    case FlowRateUnit.GallonsPerMinute:
      return (value * LITERS_PER_GALLON) / LITERS_PER_CUBIC_METER / SECONDS_PER_MINUTE;
    default:
      throw new Error(`Unknown flow rate unit ${unit}`);
  }
}
