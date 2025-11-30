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

/**
 * Absolute zero temperature in Celsius.
 * No temperature can be lower than this value.
 */
export const ABSOLUTE_ZERO_CELSIUS = -273.15;

/**
 * Absolute zero temperature in Kelvin.
 */
export const ABSOLUTE_ZERO_KELVIN = 0;

/**
 * Absolute zero temperature in Fahrenheit.
 */
export const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 * Validates that a numeric value is a finite number (not NaN or Infinity).
 *
 * @param value - The value to validate
 * @param paramName - The name of the parameter for error messages
 * @throws Error if the value is NaN or Infinity
 */
export function validateFiniteNumber(value: number, paramName = 'value'): void {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${paramName} must be a finite number, received: ${value}`);
  }
}

/**
 * Validates that a temperature value in Celsius is not below absolute zero.
 *
 * @param celsiusValue - The temperature value in Celsius
 * @throws Error if the temperature is below absolute zero (-273.15°C)
 */
export function validateTemperatureCelsius(celsiusValue: number): void {
  validateFiniteNumber(celsiusValue, 'temperature');
  if (celsiusValue < ABSOLUTE_ZERO_CELSIUS) {
    throw new Error(
      `Temperature cannot be below absolute zero (${ABSOLUTE_ZERO_CELSIUS}°C), received: ${celsiusValue}°C`,
    );
  }
}

/**
 * Validates that a temperature value in Kelvin is not below absolute zero.
 *
 * @param kelvinValue - The temperature value in Kelvin
 * @throws Error if the temperature is below absolute zero (0K)
 */
export function validateTemperatureKelvin(kelvinValue: number): void {
  validateFiniteNumber(kelvinValue, 'temperature');
  if (kelvinValue < ABSOLUTE_ZERO_KELVIN) {
    throw new Error(`Temperature cannot be below absolute zero (${ABSOLUTE_ZERO_KELVIN}K), received: ${kelvinValue}K`);
  }
}

/**
 * Validates that a temperature value in Fahrenheit is not below absolute zero.
 *
 * @param fahrenheitValue - The temperature value in Fahrenheit
 * @throws Error if the temperature is below absolute zero (-459.67°F)
 */
export function validateTemperatureFahrenheit(fahrenheitValue: number): void {
  validateFiniteNumber(fahrenheitValue, 'temperature');
  if (fahrenheitValue < ABSOLUTE_ZERO_FAHRENHEIT) {
    throw new Error(
      `Temperature cannot be below absolute zero (${ABSOLUTE_ZERO_FAHRENHEIT}°F), received: ${fahrenheitValue}°F`,
    );
  }
}

/**
 * Validates that a pressure value is not negative.
 * Absolute pressure cannot be negative.
 *
 * @param value - The pressure value
 * @throws Error if the pressure is negative
 */
export function validatePressure(value: number): void {
  validateFiniteNumber(value, 'pressure');
  if (value < 0) {
    throw new Error(`Pressure cannot be negative, received: ${value}`);
  }
}

/**
 * Validates that a specific humidity value is within valid range.
 * Specific humidity must be between 0 and the maximum possible value.
 *
 * @param value - The specific humidity value in g/kg
 * @throws Error if the specific humidity is out of valid range
 */
export function validateSpecificHumidity(value: number): void {
  validateFiniteNumber(value, 'specific humidity');
  if (value < 0) {
    throw new Error(`Specific humidity cannot be negative, received: ${value}`);
  }
}
