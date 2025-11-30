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

import { specificHumidityFromUnit, specificHumidityToUnit } from './specific-humidity';
import { SpecificHumidityUnit } from './specific-humidity-unit';

describe('specificHumidityToUnit', () => {
  it('should return the same value for GramsPerKilogram', () => {
    expect(specificHumidityToUnit(SpecificHumidityUnit.GramsPerKilogram, 10)).toBe(10);
    expect(specificHumidityToUnit(SpecificHumidityUnit.GramsPerKilogram, 0)).toBe(0);
  });

  it('should convert g/kg to kg/kg', () => {
    expect(specificHumidityToUnit(SpecificHumidityUnit.KilogramsPerKilogram, 10)).toBe(0.01);
    expect(specificHumidityToUnit(SpecificHumidityUnit.KilogramsPerKilogram, 1000)).toBe(1);
  });

  it('should convert g/kg to lb/lb', () => {
    expect(specificHumidityToUnit(SpecificHumidityUnit.PoundsPerPound, 10)).toBe(0.01);
    expect(specificHumidityToUnit(SpecificHumidityUnit.PoundsPerPound, 1000)).toBe(1);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => specificHumidityToUnit(SpecificHumidityUnit.GramsPerKilogram, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => specificHumidityToUnit(SpecificHumidityUnit.GramsPerKilogram, Number.POSITIVE_INFINITY)).toThrow(
      TypeError,
    );
  });

  it('should throw Error for negative specific humidity', () => {
    expect(() => specificHumidityToUnit(SpecificHumidityUnit.GramsPerKilogram, -10)).toThrow(
      'Specific humidity cannot be negative',
    );
  });

  it('should throw Error for unknown unit', () => {
    expect(() => specificHumidityToUnit(999 as SpecificHumidityUnit, 10)).toThrow('Unknown specific humidity unit');
  });
});

describe('specificHumidityFromUnit', () => {
  it('should return the same value for GramsPerKilogram', () => {
    expect(specificHumidityFromUnit(SpecificHumidityUnit.GramsPerKilogram, 10)).toBe(10);
    expect(specificHumidityFromUnit(SpecificHumidityUnit.GramsPerKilogram, 0)).toBe(0);
  });

  it('should convert kg/kg to g/kg', () => {
    expect(specificHumidityFromUnit(SpecificHumidityUnit.KilogramsPerKilogram, 0.01)).toBe(10);
    expect(specificHumidityFromUnit(SpecificHumidityUnit.KilogramsPerKilogram, 1)).toBe(1000);
  });

  it('should convert lb/lb to g/kg', () => {
    expect(specificHumidityFromUnit(SpecificHumidityUnit.PoundsPerPound, 0.01)).toBe(10);
    expect(specificHumidityFromUnit(SpecificHumidityUnit.PoundsPerPound, 1)).toBe(1000);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => specificHumidityFromUnit(SpecificHumidityUnit.GramsPerKilogram, Number.NaN)).toThrow(TypeError);
  });

  it('should throw Error for negative specific humidity', () => {
    expect(() => specificHumidityFromUnit(SpecificHumidityUnit.KilogramsPerKilogram, -0.01)).toThrow(
      'Specific humidity cannot be negative',
    );
  });

  it('should preserve value through round-trip g/kg -> kg/kg -> g/kg', () => {
    const original = 10;
    const kgkg = specificHumidityToUnit(SpecificHumidityUnit.KilogramsPerKilogram, original);
    const backToGKg = specificHumidityFromUnit(SpecificHumidityUnit.KilogramsPerKilogram, kgkg);
    expect(backToGKg).toBeCloseTo(original, 10);
  });
});
