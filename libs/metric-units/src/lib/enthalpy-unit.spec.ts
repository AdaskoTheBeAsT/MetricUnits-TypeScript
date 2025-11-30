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

import { EnthalpyUnit, getEnthalpyUnitLabel } from './enthalpy-unit';

describe('EnthalpyUnit', () => {
  it('should have correct enum values', () => {
    expect(EnthalpyUnit.KiloJoulesPerKilogram).toBe(0);
    expect(EnthalpyUnit.BritishThermalUnitPerPound).toBe(1);
  });

  describe('getEnthalpyUnitLabel', () => {
    it('should return correct label for KiloJoulesPerKilogram', () => {
      expect(getEnthalpyUnitLabel(EnthalpyUnit.KiloJoulesPerKilogram)).toBe('kJ/kg');
    });

    it('should return correct label for BritishThermalUnitPerPound', () => {
      expect(getEnthalpyUnitLabel(EnthalpyUnit.BritishThermalUnitPerPound)).toBe('Btu/lb');
    });

    it('should throw for unknown unit', () => {
      expect(() => getEnthalpyUnitLabel(999 as EnthalpyUnit)).toThrow('has no label');
    });
  });
});
