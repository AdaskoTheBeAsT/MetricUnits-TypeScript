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

import { temperatureFromUnit, temperatureToUnit } from './temperature';
import { TemperatureUnit } from './temperature-unit';

describe('temperatureToUnit', () => {
  it('should return the same value for Celsius', () => {
    expect(temperatureToUnit(TemperatureUnit.Celsius, 100)).toBe(100);
    expect(temperatureToUnit(TemperatureUnit.Celsius, 0)).toBe(0);
    expect(temperatureToUnit(TemperatureUnit.Celsius, -40)).toBe(-40);
  });

  it('should convert Celsius to Fahrenheit', () => {
    expect(temperatureToUnit(TemperatureUnit.Fahrenheit, 0)).toBe(32);
    expect(temperatureToUnit(TemperatureUnit.Fahrenheit, 100)).toBe(212);
    expect(temperatureToUnit(TemperatureUnit.Fahrenheit, -40)).toBe(-40);
  });

  it('should convert Celsius to Kelvin', () => {
    expect(temperatureToUnit(TemperatureUnit.Kelvin, 0)).toBe(273.15);
    expect(temperatureToUnit(TemperatureUnit.Kelvin, -273.15)).toBeCloseTo(0, 10);
    expect(temperatureToUnit(TemperatureUnit.Kelvin, 100)).toBe(373.15);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => temperatureToUnit(TemperatureUnit.Celsius, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => temperatureToUnit(TemperatureUnit.Celsius, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for temperature below absolute zero', () => {
    expect(() => temperatureToUnit(TemperatureUnit.Celsius, -300)).toThrow('Temperature cannot be below absolute zero');
  });

  it('should throw Error for unknown unit', () => {
    expect(() => temperatureToUnit(999 as TemperatureUnit, 100)).toThrow('Unknown temperature unit');
  });
});

describe('temperatureFromUnit', () => {
  it('should return the same value for Celsius', () => {
    expect(temperatureFromUnit(TemperatureUnit.Celsius, 100)).toBe(100);
    expect(temperatureFromUnit(TemperatureUnit.Celsius, 0)).toBe(0);
  });

  it('should convert Fahrenheit to Celsius', () => {
    expect(temperatureFromUnit(TemperatureUnit.Fahrenheit, 32)).toBe(0);
    expect(temperatureFromUnit(TemperatureUnit.Fahrenheit, 212)).toBe(100);
    expect(temperatureFromUnit(TemperatureUnit.Fahrenheit, -40)).toBe(-40);
  });

  it('should convert Kelvin to Celsius', () => {
    expect(temperatureFromUnit(TemperatureUnit.Kelvin, 273.15)).toBeCloseTo(0, 10);
    expect(temperatureFromUnit(TemperatureUnit.Kelvin, 0)).toBe(-273.15);
    expect(temperatureFromUnit(TemperatureUnit.Kelvin, 373.15)).toBeCloseTo(100, 10);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => temperatureFromUnit(TemperatureUnit.Celsius, Number.NaN)).toThrow(TypeError);
  });

  it('should throw Error for Kelvin below absolute zero', () => {
    expect(() => temperatureFromUnit(TemperatureUnit.Kelvin, -1)).toThrow('Temperature cannot be below absolute zero');
  });

  it('should throw Error for Fahrenheit below absolute zero', () => {
    expect(() => temperatureFromUnit(TemperatureUnit.Fahrenheit, -500)).toThrow(
      'Temperature cannot be below absolute zero',
    );
  });

  it('should preserve value through round-trip Celsius -> Fahrenheit -> Celsius', () => {
    const original = 37.5;
    const fahrenheit = temperatureToUnit(TemperatureUnit.Fahrenheit, original);
    const backToCelsius = temperatureFromUnit(TemperatureUnit.Fahrenheit, fahrenheit);
    expect(backToCelsius).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip Celsius -> Kelvin -> Celsius', () => {
    const original = 25;
    const kelvin = temperatureToUnit(TemperatureUnit.Kelvin, original);
    const backToCelsius = temperatureFromUnit(TemperatureUnit.Kelvin, kelvin);
    expect(backToCelsius).toBeCloseTo(original, 10);
  });
});
