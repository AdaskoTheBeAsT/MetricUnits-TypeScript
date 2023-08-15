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

import {
  GRAVITY_ACCELERATION,
  INCHES_PER_FOOT,
  KILOGRAM_PER_POUND,
  MILIMETERS_PER_INCH,
  SQUARE_METERS_PER_SQUARE_INCH,
} from './constants';
import { PressureUnit } from './pressure-unit';

export function airPressureToUnit(unit: PressureUnit, value: number): number {
  switch (unit) {
    case PressureUnit.Pascal:
      return value;
    case PressureUnit.KiloPascal:
      return value / 1000.0;
    case PressureUnit.mmH2O:
      return value / 10.0;
    case PressureUnit.inH2O:
      return value / 10.0 / MILIMETERS_PER_INCH;
    case PressureUnit.mmHg:
      return (value * 3) / 400;
    case PressureUnit.inHg:
      return (value * 3) / 400 / MILIMETERS_PER_INCH;
    case PressureUnit.Bar:
      return value / 100000;
    case PressureUnit.Psia:
      return (
        ((value / GRAVITY_ACCELERATION) * SQUARE_METERS_PER_SQUARE_INCH) /
        KILOGRAM_PER_POUND
      );
    case PressureUnit.ftH2O:
      return value / 10.0 / MILIMETERS_PER_INCH / INCHES_PER_FOOT;
    case PressureUnit.ftHg:
      return (value * 3) / 400 / MILIMETERS_PER_INCH / INCHES_PER_FOOT;
    default:
      throw Error(`Unknown air pressure unit ${unit}`);
  }
}

export function airPressureFromUnit(unit: PressureUnit, value: number): number {
  switch (unit) {
    case PressureUnit.Pascal:
      return value;
    case PressureUnit.KiloPascal:
      return value * 1000.0;
    case PressureUnit.mmH2O:
      return value * 10.0;
    case PressureUnit.inH2O:
      return value * 10.0 * MILIMETERS_PER_INCH;
    case PressureUnit.mmHg:
      return (value / 3) * 400;
    case PressureUnit.inHg:
      return (value / 3) * 400 * MILIMETERS_PER_INCH;
    case PressureUnit.Bar:
      return value * 100000;
    case PressureUnit.Psia:
      return (
        ((value * GRAVITY_ACCELERATION) / SQUARE_METERS_PER_SQUARE_INCH) *
        KILOGRAM_PER_POUND
      );
    case PressureUnit.ftH2O:
      return value * 10.0 * MILIMETERS_PER_INCH * INCHES_PER_FOOT;
    case PressureUnit.ftHg:
      return (value / 3) * 400 * MILIMETERS_PER_INCH * INCHES_PER_FOOT;
    default:
      throw Error(`Unknown air pressure unit ${unit}`);
  }
}
