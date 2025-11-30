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

import { velocityFromUnit, velocityToUnit } from './velocity';
import { VelocityUnit, getVelocityUnitLabel } from './velocity-unit';

describe('velocityToUnit', () => {
  it('should return the same value for MetersPerSecond', () => {
    expect(velocityToUnit(VelocityUnit.MetersPerSecond, 1)).toBe(1);
    expect(velocityToUnit(VelocityUnit.MetersPerSecond, 0)).toBe(0);
  });

  it('should convert m/s to ft/min', () => {
    const result = velocityToUnit(VelocityUnit.FeetPerMinute, 1);
    expect(result).toBeCloseTo(196.85, 2);
  });

  it('should convert m/s to ft/s', () => {
    const result = velocityToUnit(VelocityUnit.FeetPerSecond, 1);
    expect(result).toBeCloseTo(3.2808, 3);
  });

  it('should convert m/s to km/h', () => {
    expect(velocityToUnit(VelocityUnit.KilometersPerHour, 1)).toBeCloseTo(3.6, 5);
    expect(velocityToUnit(VelocityUnit.KilometersPerHour, 10)).toBeCloseTo(36, 5);
  });

  it('should convert m/s to mph', () => {
    const result = velocityToUnit(VelocityUnit.MilesPerHour, 1);
    expect(result).toBeCloseTo(2.237, 2);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => velocityToUnit(VelocityUnit.MetersPerSecond, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => velocityToUnit(VelocityUnit.MetersPerSecond, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for unknown unit', () => {
    expect(() => velocityToUnit(999 as VelocityUnit, 1)).toThrow('Unknown velocity unit');
  });
});

describe('velocityFromUnit', () => {
  it('should return the same value for MetersPerSecond', () => {
    expect(velocityFromUnit(VelocityUnit.MetersPerSecond, 1)).toBe(1);
    expect(velocityFromUnit(VelocityUnit.MetersPerSecond, 0)).toBe(0);
  });

  it('should convert ft/min to m/s', () => {
    const result = velocityFromUnit(VelocityUnit.FeetPerMinute, 196.85);
    expect(result).toBeCloseTo(1, 3);
  });

  it('should convert ft/s to m/s', () => {
    const result = velocityFromUnit(VelocityUnit.FeetPerSecond, 3.2808);
    expect(result).toBeCloseTo(1, 3);
  });

  it('should convert km/h to m/s', () => {
    expect(velocityFromUnit(VelocityUnit.KilometersPerHour, 3.6)).toBeCloseTo(1, 5);
    expect(velocityFromUnit(VelocityUnit.KilometersPerHour, 36)).toBeCloseTo(10, 5);
  });

  it('should convert mph to m/s', () => {
    const result = velocityFromUnit(VelocityUnit.MilesPerHour, 2.237);
    expect(result).toBeCloseTo(1, 2);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => velocityFromUnit(VelocityUnit.MetersPerSecond, Number.NaN)).toThrow(TypeError);
  });

  it('should preserve value through round-trip m/s -> ft/min -> m/s', () => {
    const original = 5;
    const ftPerMin = velocityToUnit(VelocityUnit.FeetPerMinute, original);
    const backToMs = velocityFromUnit(VelocityUnit.FeetPerMinute, ftPerMin);
    expect(backToMs).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip m/s -> mph -> m/s', () => {
    const original = 10;
    const mph = velocityToUnit(VelocityUnit.MilesPerHour, original);
    const backToMs = velocityFromUnit(VelocityUnit.MilesPerHour, mph);
    expect(backToMs).toBeCloseTo(original, 10);
  });
});

describe('getVelocityUnitLabel', () => {
  it('should return correct labels', () => {
    expect(getVelocityUnitLabel(VelocityUnit.MetersPerSecond)).toBe('m/s');
    expect(getVelocityUnitLabel(VelocityUnit.FeetPerMinute)).toBe('ft/min');
    expect(getVelocityUnitLabel(VelocityUnit.FeetPerSecond)).toBe('ft/s');
    expect(getVelocityUnitLabel(VelocityUnit.KilometersPerHour)).toBe('km/h');
    expect(getVelocityUnitLabel(VelocityUnit.MilesPerHour)).toBe('mph');
  });

  it('should throw for unknown unit', () => {
    expect(() => getVelocityUnitLabel(999 as VelocityUnit)).toThrow('has no label');
  });
});
