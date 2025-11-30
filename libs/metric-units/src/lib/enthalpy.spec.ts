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

import { enthalpyFromUnit, enthalpyToUnit } from './enthalpy';
import { EnthalpyUnit } from './enthalpy-unit';

describe('enthalpyToUnit', () => {
  it('should return the same value for KiloJoulesPerKilogram', () => {
    expect(enthalpyToUnit(EnthalpyUnit.KiloJoulesPerKilogram, 100)).toBe(100);
    expect(enthalpyToUnit(EnthalpyUnit.KiloJoulesPerKilogram, 0)).toBe(0);
  });

  it('should convert kJ/kg to BTU/lb', () => {
    const result = enthalpyToUnit(EnthalpyUnit.BritishThermalUnitPerPound, 100);
    expect(result).toBeGreaterThan(0);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => enthalpyToUnit(EnthalpyUnit.KiloJoulesPerKilogram, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => enthalpyToUnit(EnthalpyUnit.KiloJoulesPerKilogram, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for unknown unit', () => {
    expect(() => enthalpyToUnit(999 as EnthalpyUnit, 100)).toThrow('Unknown enthalpy unit');
  });
});

describe('enthalpyFromUnit', () => {
  it('should return the same value for KiloJoulesPerKilogram', () => {
    expect(enthalpyFromUnit(EnthalpyUnit.KiloJoulesPerKilogram, 100)).toBe(100);
    expect(enthalpyFromUnit(EnthalpyUnit.KiloJoulesPerKilogram, 0)).toBe(0);
  });

  it('should convert BTU/lb to kJ/kg', () => {
    const result = enthalpyFromUnit(EnthalpyUnit.BritishThermalUnitPerPound, 100);
    expect(result).toBeGreaterThan(0);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => enthalpyFromUnit(EnthalpyUnit.KiloJoulesPerKilogram, Number.NaN)).toThrow(TypeError);
  });

  it('should preserve value through round-trip kJ/kg -> BTU/lb -> kJ/kg', () => {
    const original = 100;
    const btu = enthalpyToUnit(EnthalpyUnit.BritishThermalUnitPerPound, original);
    const backToKJ = enthalpyFromUnit(EnthalpyUnit.BritishThermalUnitPerPound, btu);
    expect(backToKJ).toBeCloseTo(original, 10);
  });
});
