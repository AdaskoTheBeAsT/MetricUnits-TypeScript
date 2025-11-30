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

import { airPressureFromUnit, airPressureToUnit } from './air-pressure';
import { PressureUnit } from './pressure-unit';

describe('airPressureToUnit', () => {
  it('should return the same value for Pascal', () => {
    expect(airPressureToUnit(PressureUnit.Pascal, 101325)).toBe(101325);
    expect(airPressureToUnit(PressureUnit.Pascal, 0)).toBe(0);
  });

  it('should convert Pascal to KiloPascal', () => {
    expect(airPressureToUnit(PressureUnit.KiloPascal, 101325)).toBe(101.325);
    expect(airPressureToUnit(PressureUnit.KiloPascal, 1000)).toBe(1);
  });

  it('should convert Pascal to Bar', () => {
    expect(airPressureToUnit(PressureUnit.Bar, 100000)).toBe(1);
    expect(airPressureToUnit(PressureUnit.Bar, 101325)).toBeCloseTo(1.01325, 5);
  });

  it('should convert Pascal to mmH2O', () => {
    expect(airPressureToUnit(PressureUnit.mmH2O, 100)).toBe(10);
  });

  it('should convert Pascal to inH2O', () => {
    const result = airPressureToUnit(PressureUnit.inH2O, 249.09);
    expect(result).toBeCloseTo(1, 1);
  });

  it('should convert Pascal to mmHg', () => {
    const result = airPressureToUnit(PressureUnit.mmHg, 133.322);
    expect(result).toBeCloseTo(1, 1);
  });

  it('should convert Pascal to inHg', () => {
    const result = airPressureToUnit(PressureUnit.inHg, 3386.39);
    expect(result).toBeCloseTo(1, 1);
  });

  it('should convert Pascal to Psia', () => {
    const result = airPressureToUnit(PressureUnit.Psia, 101325);
    expect(result).toBeCloseTo(14.696, 1);
  });

  it('should convert Pascal to ftH2O', () => {
    const result = airPressureToUnit(PressureUnit.ftH2O, 2989.07);
    expect(result).toBeCloseTo(1, 1);
  });

  it('should convert Pascal to ftHg', () => {
    const result = airPressureToUnit(PressureUnit.ftHg, 40636.66);
    expect(result).toBeCloseTo(1, 1);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => airPressureToUnit(PressureUnit.Pascal, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => airPressureToUnit(PressureUnit.Pascal, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for negative pressure', () => {
    expect(() => airPressureToUnit(PressureUnit.Pascal, -100)).toThrow('Pressure cannot be negative');
  });

  it('should throw Error for unknown unit', () => {
    expect(() => airPressureToUnit(999 as PressureUnit, 100)).toThrow('Unknown air pressure unit');
  });
});

describe('airPressureFromUnit', () => {
  it('should return the same value for Pascal', () => {
    expect(airPressureFromUnit(PressureUnit.Pascal, 101325)).toBe(101325);
  });

  it('should convert KiloPascal to Pascal', () => {
    expect(airPressureFromUnit(PressureUnit.KiloPascal, 101.325)).toBe(101325);
    expect(airPressureFromUnit(PressureUnit.KiloPascal, 1)).toBe(1000);
  });

  it('should convert Bar to Pascal', () => {
    expect(airPressureFromUnit(PressureUnit.Bar, 1)).toBe(100000);
    expect(airPressureFromUnit(PressureUnit.Bar, 1.01325)).toBeCloseTo(101325, 0);
  });

  it('should convert mmH2O to Pascal', () => {
    expect(airPressureFromUnit(PressureUnit.mmH2O, 10)).toBe(100);
  });

  it('should convert inH2O to Pascal', () => {
    // 1 inH2O = 10 * 25.4 = 254 Pa (using library constants)
    const result = airPressureFromUnit(PressureUnit.inH2O, 1);
    expect(result).toBe(254);
  });

  it('should convert mmHg to Pascal', () => {
    // 1 mmHg = (1/3) * 400 ≈ 133.33 Pa
    const result = airPressureFromUnit(PressureUnit.mmHg, 1);
    expect(result).toBeCloseTo(133.33, 1);
  });

  it('should convert inHg to Pascal', () => {
    // 1 inHg = (1/3) * 400 * 25.4 ≈ 3386.67 Pa
    const result = airPressureFromUnit(PressureUnit.inHg, 1);
    expect(result).toBeCloseTo(3386.67, 0);
  });

  it('should convert Psia to Pascal', () => {
    const result = airPressureFromUnit(PressureUnit.Psia, 14.696);
    expect(result).toBeCloseTo(101325, -2);
  });

  it('should convert ftH2O to Pascal', () => {
    // 1 ftH2O = 10 * 25.4 * 12 = 3048 Pa
    const result = airPressureFromUnit(PressureUnit.ftH2O, 1);
    expect(result).toBe(3048);
  });

  it('should convert ftHg to Pascal', () => {
    // 1 ftHg = (1/3) * 400 * 25.4 * 12 ≈ 40640 Pa
    const result = airPressureFromUnit(PressureUnit.ftHg, 1);
    expect(result).toBeCloseTo(40640, 0);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => airPressureFromUnit(PressureUnit.Pascal, Number.NaN)).toThrow(TypeError);
  });

  it('should throw Error for negative pressure', () => {
    expect(() => airPressureFromUnit(PressureUnit.KiloPascal, -10)).toThrow('Pressure cannot be negative');
  });

  it('should throw Error for unknown unit', () => {
    expect(() => airPressureFromUnit(999 as PressureUnit, 100)).toThrow('Unknown air pressure unit');
  });

  it('should preserve value through round-trip Pascal -> KiloPascal -> Pascal', () => {
    const original = 101325;
    const kpa = airPressureToUnit(PressureUnit.KiloPascal, original);
    const backToPascal = airPressureFromUnit(PressureUnit.KiloPascal, kpa);
    expect(backToPascal).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip Pascal -> Bar -> Pascal', () => {
    const original = 101325;
    const bar = airPressureToUnit(PressureUnit.Bar, original);
    const backToPascal = airPressureFromUnit(PressureUnit.Bar, bar);
    expect(backToPascal).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip Pascal -> inH2O -> Pascal', () => {
    const original = 1000;
    const inH2O = airPressureToUnit(PressureUnit.inH2O, original);
    const backToPascal = airPressureFromUnit(PressureUnit.inH2O, inH2O);
    expect(backToPascal).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip Pascal -> Psia -> Pascal', () => {
    const original = 101325;
    const psia = airPressureToUnit(PressureUnit.Psia, original);
    const backToPascal = airPressureFromUnit(PressureUnit.Psia, psia);
    expect(backToPascal).toBeCloseTo(original, 5);
  });
});
