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

export const GRAVITY_ACCELERATION = 9.80665;
export const INCHES_PER_FOOT = 12;
export const KILOGRAM_PER_POUND = 0.45359237;
export const METERS_PER_INCH = 0.0254;
export const METERS_PER_FOOT = METERS_PER_INCH * INCHES_PER_FOOT;
export const MILIMETERS_PER_INCH = METERS_PER_INCH * 1000;
export const SECONDS_PER_HOUR = 3600;
export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;
export const SQUARE_METERS_PER_SQUARE_INCH = Math.pow(METERS_PER_INCH, 2);

/**
 * BTU per Watt-hour conversion factor.
 * 1 Watt-hour = 3.412 BTU (British Thermal Units)
 */
export const BTU_PER_WATT_HOUR = 3.412;

/**
 * Cubic meters per cubic foot.
 * 1 cubic foot = 0.0283168 cubic meters
 */
export const CUBIC_METERS_PER_CUBIC_FOOT = Math.pow(METERS_PER_FOOT, 3);

/**
 * Liters per cubic meter.
 * 1 cubic meter = 1000 liters
 */
export const LITERS_PER_CUBIC_METER = 1000;

/**
 * Liters per US gallon.
 * 1 US gallon = 3.78541 liters
 */
export const LITERS_PER_GALLON = 3.78541;
