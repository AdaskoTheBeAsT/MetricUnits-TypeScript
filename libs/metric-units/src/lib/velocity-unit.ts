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

export enum VelocityUnit {
  MetersPerSecond,
  FeetPerMinute,
  FeetPerSecond,
  KilometersPerHour,
  MilesPerHour,
}

const velocityUnitLabels: Record<VelocityUnit, string> = {
  [VelocityUnit.MetersPerSecond]: 'm/s',
  [VelocityUnit.FeetPerMinute]: 'ft/min',
  [VelocityUnit.FeetPerSecond]: 'ft/s',
  [VelocityUnit.KilometersPerHour]: 'km/h',
  [VelocityUnit.MilesPerHour]: 'mph',
};

/**
 * Gets the display label for a velocity unit.
 * @param unit - The velocity unit
 * @returns The unit label (e.g., 'm/s', 'ft/min', 'mph')
 * @throws Error if the unit is unknown
 */
export function getVelocityUnitLabel(unit: VelocityUnit): string {
  const label = velocityUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type VelocityUnit has no label`);
  }
  return label;
}
