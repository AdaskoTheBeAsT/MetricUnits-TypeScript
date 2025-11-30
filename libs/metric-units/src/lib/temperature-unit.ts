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

export enum TemperatureUnit {
  Celsius,
  Fahrenheit,
  Kelvin,
}

const temperatureUnitLabels: Record<TemperatureUnit, string> = {
  [TemperatureUnit.Celsius]: '°C',
  [TemperatureUnit.Fahrenheit]: '°F',
  [TemperatureUnit.Kelvin]: 'K',
};

/**
 * Gets the display label for a temperature unit.
 * @param unit - The temperature unit
 * @returns The unit label (e.g., '°C', '°F', 'K')
 * @throws Error if the unit is unknown
 */
export function getTemperatureUnitLabel(unit: TemperatureUnit): string {
  const label = temperatureUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type TemperatureUnit has no label`);
  }
  return label;
}
