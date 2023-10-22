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

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SpecificHumidityUnit {
  export function getLabel(value: SpecificHumidityUnit): string {
    switch (value) {
      case SpecificHumidityUnit.GramsPerKilogram:
        return 'g/kg';
      case SpecificHumidityUnit.KilogramsPerKilogram:
        return 'kg/kg';
      case SpecificHumidityUnit.PoundsPerPound:
        return 'lb/lb';
      default:
        throw new Error(`${value} of type SpecificHumidityUnit has no label`);
    }
  }
}

export default SpecificHumidityUnit;
