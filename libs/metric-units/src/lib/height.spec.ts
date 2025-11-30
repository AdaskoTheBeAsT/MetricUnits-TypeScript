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

import { METERS_PER_FOOT } from './constants';
import { heightFromUnit, heightToUnit } from './height';
import { HeightUnit } from './height-unit';

describe('heightToUnit', () => {
  it('should return the same value for Meters', () => {
    expect(heightToUnit(HeightUnit.Meters, 100)).toBe(100);
    expect(heightToUnit(HeightUnit.Meters, 0)).toBe(0);
    expect(heightToUnit(HeightUnit.Meters, -10)).toBe(-10);
  });

  it('should convert Meters to Feet', () => {
    expect(heightToUnit(HeightUnit.Feet, 1)).toBeCloseTo(1 / METERS_PER_FOOT, 10);
    expect(heightToUnit(HeightUnit.Feet, METERS_PER_FOOT)).toBeCloseTo(1, 10);
    expect(heightToUnit(HeightUnit.Feet, 0)).toBe(0);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => heightToUnit(HeightUnit.Meters, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => heightToUnit(HeightUnit.Meters, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for unknown unit', () => {
    expect(() => heightToUnit(999 as HeightUnit, 100)).toThrow('Unknown height unit');
  });
});

describe('heightFromUnit', () => {
  it('should return the same value for Meters', () => {
    expect(heightFromUnit(HeightUnit.Meters, 100)).toBe(100);
    expect(heightFromUnit(HeightUnit.Meters, 0)).toBe(0);
  });

  it('should convert Feet to Meters', () => {
    expect(heightFromUnit(HeightUnit.Feet, 1)).toBeCloseTo(METERS_PER_FOOT, 10);
    expect(heightFromUnit(HeightUnit.Feet, 1 / METERS_PER_FOOT)).toBeCloseTo(1, 10);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => heightFromUnit(HeightUnit.Meters, Number.NaN)).toThrow(TypeError);
  });

  it('should preserve value through round-trip Meters -> Feet -> Meters', () => {
    const original = 10;
    const feet = heightToUnit(HeightUnit.Feet, original);
    const backToMeters = heightFromUnit(HeightUnit.Feet, feet);
    expect(backToMeters).toBeCloseTo(original, 10);
  });
});
