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

import { powerFromUnit, powerToUnit } from './power';
import { PowerUnit, getPowerUnitLabel } from './power-unit';

describe('powerToUnit', () => {
  it('should return the same value for Watt', () => {
    expect(powerToUnit(PowerUnit.Watt, 1)).toBe(1);
    expect(powerToUnit(PowerUnit.Watt, 1000)).toBe(1000);
    expect(powerToUnit(PowerUnit.Watt, 0)).toBe(0);
  });

  it('should convert W to kW', () => {
    expect(powerToUnit(PowerUnit.Kilowatt, 1000)).toBe(1);
    expect(powerToUnit(PowerUnit.Kilowatt, 1)).toBe(0.001);
  });

  it('should convert W to BTU/h', () => {
    const result = powerToUnit(PowerUnit.BtuPerHour, 1);
    expect(result).toBeCloseTo(3.412, 3);
  });

  it('should convert W to horsepower', () => {
    const result = powerToUnit(PowerUnit.Horsepower, 745.7);
    expect(result).toBeCloseTo(1, 3);
  });

  it('should convert W to ton of refrigeration', () => {
    const result = powerToUnit(PowerUnit.TonOfRefrigeration, 3516.85);
    expect(result).toBeCloseTo(1, 3);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => powerToUnit(PowerUnit.Watt, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => powerToUnit(PowerUnit.Watt, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for unknown unit', () => {
    expect(() => powerToUnit(999 as PowerUnit, 1)).toThrow('Unknown power unit');
  });
});

describe('powerFromUnit', () => {
  it('should return the same value for Watt', () => {
    expect(powerFromUnit(PowerUnit.Watt, 1)).toBe(1);
    expect(powerFromUnit(PowerUnit.Watt, 1000)).toBe(1000);
  });

  it('should convert kW to W', () => {
    expect(powerFromUnit(PowerUnit.Kilowatt, 1)).toBe(1000);
    expect(powerFromUnit(PowerUnit.Kilowatt, 0.001)).toBe(1);
  });

  it('should convert BTU/h to W', () => {
    const result = powerFromUnit(PowerUnit.BtuPerHour, 3.41214);
    expect(result).toBeCloseTo(1, 3);
  });

  it('should convert horsepower to W', () => {
    const result = powerFromUnit(PowerUnit.Horsepower, 1);
    expect(result).toBeCloseTo(745.7, 1);
  });

  it('should convert ton of refrigeration to W', () => {
    const result = powerFromUnit(PowerUnit.TonOfRefrigeration, 1);
    expect(result).toBeCloseTo(3516.85, 2);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => powerFromUnit(PowerUnit.Watt, Number.NaN)).toThrow(TypeError);
  });

  it('should preserve value through round-trip W -> BTU/h -> W', () => {
    const original = 1000;
    const btuPerHour = powerToUnit(PowerUnit.BtuPerHour, original);
    const backToWatts = powerFromUnit(PowerUnit.BtuPerHour, btuPerHour);
    expect(backToWatts).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip W -> hp -> W', () => {
    const original = 5000;
    const hp = powerToUnit(PowerUnit.Horsepower, original);
    const backToWatts = powerFromUnit(PowerUnit.Horsepower, hp);
    expect(backToWatts).toBeCloseTo(original, 10);
  });
});

describe('getPowerUnitLabel', () => {
  it('should return correct labels', () => {
    expect(getPowerUnitLabel(PowerUnit.Watt)).toBe('W');
    expect(getPowerUnitLabel(PowerUnit.Kilowatt)).toBe('kW');
    expect(getPowerUnitLabel(PowerUnit.BtuPerHour)).toBe('BTU/h');
    expect(getPowerUnitLabel(PowerUnit.Horsepower)).toBe('hp');
    expect(getPowerUnitLabel(PowerUnit.TonOfRefrigeration)).toBe('TR');
  });

  it('should throw for unknown unit', () => {
    expect(() => getPowerUnitLabel(999 as PowerUnit)).toThrow('has no label');
  });
});
