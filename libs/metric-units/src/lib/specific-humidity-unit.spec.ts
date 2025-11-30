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

import { SpecificHumidityUnit, getSpecificHumidityUnitLabel } from './specific-humidity-unit';

describe('SpecificHumidityUnit', () => {
  it('should have correct enum values', () => {
    expect(SpecificHumidityUnit.GramsPerKilogram).toBe(0);
    expect(SpecificHumidityUnit.KilogramsPerKilogram).toBe(1);
    expect(SpecificHumidityUnit.PoundsPerPound).toBe(2);
  });

  describe('getSpecificHumidityUnitLabel', () => {
    it('should return correct label for GramsPerKilogram', () => {
      expect(getSpecificHumidityUnitLabel(SpecificHumidityUnit.GramsPerKilogram)).toBe('g/kg');
    });

    it('should return correct label for KilogramsPerKilogram', () => {
      expect(getSpecificHumidityUnitLabel(SpecificHumidityUnit.KilogramsPerKilogram)).toBe('kg/kg');
    });

    it('should return correct label for PoundsPerPound', () => {
      expect(getSpecificHumidityUnitLabel(SpecificHumidityUnit.PoundsPerPound)).toBe('lb/lb');
    });

    it('should throw for unknown unit', () => {
      expect(() => getSpecificHumidityUnitLabel(999 as SpecificHumidityUnit)).toThrow('has no label');
    });
  });
});
