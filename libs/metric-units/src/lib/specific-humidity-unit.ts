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

export enum SpecificHumidityUnit {
  GramsPerKilogram,
  KilogramsPerKilogram,
  PoundsPerPound,
}

const specificHumidityUnitLabels: Record<SpecificHumidityUnit, string> = {
  [SpecificHumidityUnit.GramsPerKilogram]: 'g/kg',
  [SpecificHumidityUnit.KilogramsPerKilogram]: 'kg/kg',
  [SpecificHumidityUnit.PoundsPerPound]: 'lb/lb',
};

/**
 * Gets the display label for a specific humidity unit.
 * @param unit - The specific humidity unit
 * @returns The unit label (e.g., 'g/kg', 'kg/kg', 'lb/lb')
 * @throws Error if the unit is unknown
 */
export function getSpecificHumidityUnitLabel(unit: SpecificHumidityUnit): string {
  const label = specificHumidityUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type SpecificHumidityUnit has no label`);
  }
  return label;
}
