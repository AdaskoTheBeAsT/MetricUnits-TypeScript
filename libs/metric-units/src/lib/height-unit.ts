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

export enum HeightUnit {
  Meters,
  Feet,
}

const heightUnitLabels: Record<HeightUnit, string> = {
  [HeightUnit.Meters]: 'm',
  [HeightUnit.Feet]: 'ft',
};

/**
 * Gets the display label for a height unit.
 * @param unit - The height unit
 * @returns The unit label (e.g., 'm', 'ft')
 * @throws Error if the unit is unknown
 */
export function getHeightUnitLabel(unit: HeightUnit): string {
  const label = heightUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type HeightUnit has no label`);
  }
  return label;
}
