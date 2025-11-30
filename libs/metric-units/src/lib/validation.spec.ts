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

import {
  ABSOLUTE_ZERO_CELSIUS,
  ABSOLUTE_ZERO_FAHRENHEIT,
  ABSOLUTE_ZERO_KELVIN,
  validateFiniteNumber,
  validatePressure,
  validateSpecificHumidity,
  validateTemperatureCelsius,
  validateTemperatureFahrenheit,
  validateTemperatureKelvin,
} from './validation';

describe('validateFiniteNumber', () => {
  it('should not throw for valid finite numbers', () => {
    expect(() => validateFiniteNumber(0)).not.toThrow();
    expect(() => validateFiniteNumber(100)).not.toThrow();
    expect(() => validateFiniteNumber(-100)).not.toThrow();
    expect(() => validateFiniteNumber(0.001)).not.toThrow();
  });

  it('should throw TypeError for NaN', () => {
    expect(() => validateFiniteNumber(Number.NaN)).toThrow(TypeError);
    expect(() => validateFiniteNumber(Number.NaN, 'test')).toThrow('test must be a finite number');
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => validateFiniteNumber(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    expect(() => validateFiniteNumber(Number.NEGATIVE_INFINITY)).toThrow(TypeError);
  });
});

describe('validateTemperatureCelsius', () => {
  it('should not throw for valid temperatures', () => {
    expect(() => validateTemperatureCelsius(0)).not.toThrow();
    expect(() => validateTemperatureCelsius(100)).not.toThrow();
    expect(() => validateTemperatureCelsius(-40)).not.toThrow();
    expect(() => validateTemperatureCelsius(ABSOLUTE_ZERO_CELSIUS)).not.toThrow();
  });

  it('should throw for temperatures below absolute zero', () => {
    expect(() => validateTemperatureCelsius(-274)).toThrow('Temperature cannot be below absolute zero');
    expect(() => validateTemperatureCelsius(-300)).toThrow();
  });

  it('should throw TypeError for NaN', () => {
    expect(() => validateTemperatureCelsius(Number.NaN)).toThrow(TypeError);
  });
});

describe('validateTemperatureKelvin', () => {
  it('should not throw for valid temperatures', () => {
    expect(() => validateTemperatureKelvin(0)).not.toThrow();
    expect(() => validateTemperatureKelvin(273.15)).not.toThrow();
    expect(() => validateTemperatureKelvin(ABSOLUTE_ZERO_KELVIN)).not.toThrow();
  });

  it('should throw for temperatures below absolute zero', () => {
    expect(() => validateTemperatureKelvin(-1)).toThrow('Temperature cannot be below absolute zero');
    expect(() => validateTemperatureKelvin(-0.001)).toThrow();
  });
});

describe('validateTemperatureFahrenheit', () => {
  it('should not throw for valid temperatures', () => {
    expect(() => validateTemperatureFahrenheit(0)).not.toThrow();
    expect(() => validateTemperatureFahrenheit(32)).not.toThrow();
    expect(() => validateTemperatureFahrenheit(ABSOLUTE_ZERO_FAHRENHEIT)).not.toThrow();
  });

  it('should throw for temperatures below absolute zero', () => {
    expect(() => validateTemperatureFahrenheit(-460)).toThrow('Temperature cannot be below absolute zero');
    expect(() => validateTemperatureFahrenheit(-500)).toThrow();
  });
});

describe('validatePressure', () => {
  it('should not throw for valid pressures', () => {
    expect(() => validatePressure(0)).not.toThrow();
    expect(() => validatePressure(101325)).not.toThrow();
    expect(() => validatePressure(0.001)).not.toThrow();
  });

  it('should throw for negative pressures', () => {
    expect(() => validatePressure(-1)).toThrow('Pressure cannot be negative');
    expect(() => validatePressure(-100)).toThrow();
  });

  it('should throw TypeError for NaN', () => {
    expect(() => validatePressure(Number.NaN)).toThrow(TypeError);
  });
});

describe('validateSpecificHumidity', () => {
  it('should not throw for valid specific humidity', () => {
    expect(() => validateSpecificHumidity(0)).not.toThrow();
    expect(() => validateSpecificHumidity(10)).not.toThrow();
    expect(() => validateSpecificHumidity(0.001)).not.toThrow();
  });

  it('should throw for negative specific humidity', () => {
    expect(() => validateSpecificHumidity(-1)).toThrow('Specific humidity cannot be negative');
    expect(() => validateSpecificHumidity(-0.001)).toThrow();
  });

  it('should throw TypeError for NaN', () => {
    expect(() => validateSpecificHumidity(Number.NaN)).toThrow(TypeError);
  });
});

describe('constants', () => {
  it('should have correct absolute zero values', () => {
    expect(ABSOLUTE_ZERO_CELSIUS).toBe(-273.15);
    expect(ABSOLUTE_ZERO_KELVIN).toBe(0);
    expect(ABSOLUTE_ZERO_FAHRENHEIT).toBe(-459.67);
  });
});
