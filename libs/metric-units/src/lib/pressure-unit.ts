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

export enum PressureUnit {
  Pascal,
  KiloPascal,
  mmH2O,
  inH2O,
  mmHg,
  inHg,
  Bar,
  Psia,
  ftH2O,
  ftHg,
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PressureUnit {
  export function getLabel(value: PressureUnit): string {
    switch (value) {
      case PressureUnit.Pascal:
        return 'Pa';
      case PressureUnit.KiloPascal:
        return 'kPa';
      case PressureUnit.mmH2O:
        return 'mmH₂O';
      case PressureUnit.inH2O:
        return 'inH₂O';
      case PressureUnit.mmHg:
        return 'mmHg';
      case PressureUnit.inHg:
        return 'inHg';
      case PressureUnit.Bar:
        return 'bar';
      case PressureUnit.Psia:
        return 'PSIA';
      case PressureUnit.ftH2O:
        return 'ftH₂O';
      case PressureUnit.ftHg:
        return 'ftHg';
      default:
        throw new Error(`${value} of type PressureUnit has no label`);
    }
  }
}

export default PressureUnit;
