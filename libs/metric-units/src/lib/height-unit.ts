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

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HeightUnit {
  export function getLabel(value: HeightUnit): string {
    switch (value) {
      case HeightUnit.Meters:
        return 'm';
      case HeightUnit.Feet:
        return 'ft';
      default:
        throw new Error(`${value} of type HeightUnit has no label`);
    }
  }
}

export default HeightUnit;
