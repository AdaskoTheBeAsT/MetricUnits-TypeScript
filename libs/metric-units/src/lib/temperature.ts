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
import { TemperatureUnit } from './temperature-unit';
import { validateTemperatureCelsius, validateTemperatureFahrenheit, validateTemperatureKelvin } from './validation';

/**
 * Converts a temperature value from Celsius (base unit) to the specified unit.
 *
 * @param unit - The target temperature unit to convert to
 * @param value - The temperature value in Celsius
 * @returns The temperature value converted to the specified unit
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the temperature is below absolute zero
 *
 * @example
 * // Convert 100°C to Fahrenheit
 * temperatureToUnit(TemperatureUnit.Fahrenheit, 100); // Returns 212
 *
 * @example
 * // Convert 0°C to Kelvin
 * temperatureToUnit(TemperatureUnit.Kelvin, 0); // Returns 273.15
 */
export function temperatureToUnit(unit: TemperatureUnit, value: number): number {
  validateTemperatureCelsius(value);
  switch (unit) {
    case TemperatureUnit.Celsius:
      return value;
    case TemperatureUnit.Fahrenheit:
      return (value * 9) / 5 + 32;
    case TemperatureUnit.Kelvin:
      return value + 273.15;
    default:
      throw new Error(`Unknown temperature unit ${unit}`);
  }
}

/**
 * Converts a temperature value from the specified unit to Celsius (base unit).
 *
 * @param unit - The source temperature unit to convert from
 * @param value - The temperature value in the specified unit
 * @returns The temperature value converted to Celsius
 * @throws Error if the unit is not recognized
 * @throws TypeError if the value is not a finite number
 * @throws Error if the temperature is below absolute zero
 *
 * @example
 * // Convert 212°F to Celsius
 * temperatureFromUnit(TemperatureUnit.Fahrenheit, 212); // Returns 100
 *
 * @example
 * // Convert 273.15K to Celsius
 * temperatureFromUnit(TemperatureUnit.Kelvin, 273.15); // Returns 0
 */
export function temperatureFromUnit(unit: TemperatureUnit, value: number): number {
  switch (unit) {
    case TemperatureUnit.Celsius:
      validateTemperatureCelsius(value);
      return value;
    case TemperatureUnit.Fahrenheit:
      validateTemperatureFahrenheit(value);
      return ((value - 32) * 5) / 9;
    case TemperatureUnit.Kelvin:
      validateTemperatureKelvin(value);
      return value - 273.15;
    default:
      throw new Error(`Unknown temperature unit ${unit}`);
  }
}
