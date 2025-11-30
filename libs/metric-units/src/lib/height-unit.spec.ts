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

import { HeightUnit, getHeightUnitLabel } from './height-unit';

describe('HeightUnit', () => {
  it('should have correct enum values', () => {
    expect(HeightUnit.Meters).toBe(0);
    expect(HeightUnit.Feet).toBe(1);
  });

  describe('getHeightUnitLabel', () => {
    it('should return correct label for Meters', () => {
      expect(getHeightUnitLabel(HeightUnit.Meters)).toBe('m');
    });

    it('should return correct label for Feet', () => {
      expect(getHeightUnitLabel(HeightUnit.Feet)).toBe('ft');
    });

    it('should throw for unknown unit', () => {
      expect(() => getHeightUnitLabel(999 as HeightUnit)).toThrow('has no label');
    });
  });
});
