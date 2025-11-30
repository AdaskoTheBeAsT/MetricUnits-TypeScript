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

const pressureUnitLabels: Record<PressureUnit, string> = {
  [PressureUnit.Pascal]: 'Pa',
  [PressureUnit.KiloPascal]: 'kPa',
  [PressureUnit.mmH2O]: 'mmH₂O',
  [PressureUnit.inH2O]: 'inH₂O',
  [PressureUnit.mmHg]: 'mmHg',
  [PressureUnit.inHg]: 'inHg',
  [PressureUnit.Bar]: 'bar',
  [PressureUnit.Psia]: 'PSIA',
  [PressureUnit.ftH2O]: 'ftH₂O',
  [PressureUnit.ftHg]: 'ftHg',
};

/**
 * Gets the display label for a pressure unit.
 * @param unit - The pressure unit
 * @returns The unit label (e.g., 'Pa', 'kPa', 'bar')
 * @throws Error if the unit is unknown
 */
export function getPressureUnitLabel(unit: PressureUnit): string {
  const label = pressureUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type PressureUnit has no label`);
  }
  return label;
}
