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

import SpecificHumidityUnit from './specific-humidity-unit';

export function specificHumidityToUnit(unit: SpecificHumidityUnit, value: number): number {
  switch (unit) {
    case SpecificHumidityUnit.GramsPerKilogram:
      return value;
    case SpecificHumidityUnit.KilogramsPerKilogram:
      return value / 1000;
    case SpecificHumidityUnit.PoundsPerPound:
      return value / 1000;
    default:
      throw Error(`Unknown specific humidity unit ${unit}`);
  }
}

export function specificHumidityFromUnit(unit: SpecificHumidityUnit, value: number): number {
  switch (unit) {
    case SpecificHumidityUnit.GramsPerKilogram:
      return value;
    case SpecificHumidityUnit.KilogramsPerKilogram:
      return value * 1000;
    case SpecificHumidityUnit.PoundsPerPound:
      return value * 1000;
    default:
      throw Error(`Unknown specific humidity unit ${unit}`);
  }
}
