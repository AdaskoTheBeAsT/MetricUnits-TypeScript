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

export enum PowerUnit {
  Watt,
  Kilowatt,
  BtuPerHour,
  Horsepower,
  TonOfRefrigeration,
}

const powerUnitLabels: Record<PowerUnit, string> = {
  [PowerUnit.Watt]: 'W',
  [PowerUnit.Kilowatt]: 'kW',
  [PowerUnit.BtuPerHour]: 'BTU/h',
  [PowerUnit.Horsepower]: 'hp',
  [PowerUnit.TonOfRefrigeration]: 'TR',
};

/**
 * Gets the display label for a power unit.
 * @param unit - The power unit
 * @returns The unit label (e.g., 'W', 'kW', 'BTU/h')
 * @throws Error if the unit is unknown
 */
export function getPowerUnitLabel(unit: PowerUnit): string {
  const label = powerUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type PowerUnit has no label`);
  }
  return label;
}
