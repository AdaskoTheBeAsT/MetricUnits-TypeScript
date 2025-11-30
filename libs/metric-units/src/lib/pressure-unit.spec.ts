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

import { PressureUnit, getPressureUnitLabel } from './pressure-unit';

describe('PressureUnit', () => {
  it('should have correct enum values', () => {
    expect(PressureUnit.Pascal).toBe(0);
    expect(PressureUnit.KiloPascal).toBe(1);
    expect(PressureUnit.mmH2O).toBe(2);
    expect(PressureUnit.Bar).toBe(6);
  });

  describe('getPressureUnitLabel', () => {
    it('should return correct label for Pascal', () => {
      expect(getPressureUnitLabel(PressureUnit.Pascal)).toBe('Pa');
    });

    it('should return correct label for KiloPascal', () => {
      expect(getPressureUnitLabel(PressureUnit.KiloPascal)).toBe('kPa');
    });

    it('should return correct label for Bar', () => {
      expect(getPressureUnitLabel(PressureUnit.Bar)).toBe('bar');
    });

    it('should return correct label for mmH2O', () => {
      expect(getPressureUnitLabel(PressureUnit.mmH2O)).toBe('mmH₂O');
    });

    it('should throw for unknown unit', () => {
      expect(() => getPressureUnitLabel(999 as PressureUnit)).toThrow('has no label');
    });
  });
});
