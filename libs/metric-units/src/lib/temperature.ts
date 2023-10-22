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
import TemperatureUnit from './temperature-unit';

export function temperatureToUnit(unit: TemperatureUnit, value: number): number {
  switch (unit) {
    case TemperatureUnit.Celsius:
      return value;
    case TemperatureUnit.Fahrenheit:
      return (value * 9.0) / 5.0 + 32.0;
    case TemperatureUnit.Kelvin:
      return value + 273.15;
    default:
      throw Error(`Unknown temperature unit ${unit}`);
  }
}

export function temperatureFromUnit(unit: TemperatureUnit, value: number): number {
  switch (unit) {
    case TemperatureUnit.Celsius:
      return value;
    case TemperatureUnit.Fahrenheit:
      return ((value - 32.0) * 5.0) / 9.0;
    case TemperatureUnit.Kelvin:
      return value - 273.15;
    default:
      throw Error(`Unknown temperature unit ${unit}`);
  }
}
