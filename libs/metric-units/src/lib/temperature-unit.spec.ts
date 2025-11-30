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

import { TemperatureUnit, getTemperatureUnitLabel } from './temperature-unit';

describe('TemperatureUnit', () => {
  it('should have correct enum values', () => {
    expect(TemperatureUnit.Celsius).toBe(0);
    expect(TemperatureUnit.Fahrenheit).toBe(1);
    expect(TemperatureUnit.Kelvin).toBe(2);
  });

  describe('getTemperatureUnitLabel', () => {
    it('should return correct label for Celsius', () => {
      expect(getTemperatureUnitLabel(TemperatureUnit.Celsius)).toBe('°C');
    });

    it('should return correct label for Fahrenheit', () => {
      expect(getTemperatureUnitLabel(TemperatureUnit.Fahrenheit)).toBe('°F');
    });

    it('should return correct label for Kelvin', () => {
      expect(getTemperatureUnitLabel(TemperatureUnit.Kelvin)).toBe('K');
    });

    it('should throw for unknown unit', () => {
      expect(() => getTemperatureUnitLabel(999 as TemperatureUnit)).toThrow('has no label');
    });
  });
});
