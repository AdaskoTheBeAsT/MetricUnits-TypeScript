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

import { flowRateFromUnit, flowRateToUnit } from './flow-rate';
import { FlowRateUnit, getFlowRateUnitLabel } from './flow-rate-unit';

describe('flowRateToUnit', () => {
  it('should return the same value for CubicMetersPerSecond', () => {
    expect(flowRateToUnit(FlowRateUnit.CubicMetersPerSecond, 1)).toBe(1);
    expect(flowRateToUnit(FlowRateUnit.CubicMetersPerSecond, 0)).toBe(0);
  });

  it('should convert m³/s to m³/h', () => {
    expect(flowRateToUnit(FlowRateUnit.CubicMetersPerHour, 1)).toBe(3600);
    expect(flowRateToUnit(FlowRateUnit.CubicMetersPerHour, 0.5)).toBe(1800);
  });

  it('should convert m³/s to CFM', () => {
    const result = flowRateToUnit(FlowRateUnit.CubicFeetPerMinute, 1);
    expect(result).toBeCloseTo(2118.88, 0);
  });

  it('should convert m³/s to L/s', () => {
    expect(flowRateToUnit(FlowRateUnit.LitersPerSecond, 1)).toBe(1000);
    expect(flowRateToUnit(FlowRateUnit.LitersPerSecond, 0.001)).toBe(1);
  });

  it('should convert m³/s to L/min', () => {
    expect(flowRateToUnit(FlowRateUnit.LitersPerMinute, 1)).toBe(60000);
  });

  it('should convert m³/s to GPM', () => {
    const result = flowRateToUnit(FlowRateUnit.GallonsPerMinute, 1);
    expect(result).toBeCloseTo(15850.32, 0);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => flowRateToUnit(FlowRateUnit.CubicMetersPerSecond, Number.NaN)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity', () => {
    expect(() => flowRateToUnit(FlowRateUnit.CubicMetersPerSecond, Number.POSITIVE_INFINITY)).toThrow(TypeError);
  });

  it('should throw Error for unknown unit', () => {
    expect(() => flowRateToUnit(999 as FlowRateUnit, 1)).toThrow('Unknown flow rate unit');
  });
});

describe('flowRateFromUnit', () => {
  it('should return the same value for CubicMetersPerSecond', () => {
    expect(flowRateFromUnit(FlowRateUnit.CubicMetersPerSecond, 1)).toBe(1);
    expect(flowRateFromUnit(FlowRateUnit.CubicMetersPerSecond, 0)).toBe(0);
  });

  it('should convert m³/h to m³/s', () => {
    expect(flowRateFromUnit(FlowRateUnit.CubicMetersPerHour, 3600)).toBe(1);
    expect(flowRateFromUnit(FlowRateUnit.CubicMetersPerHour, 1800)).toBe(0.5);
  });

  it('should convert CFM to m³/s', () => {
    const result = flowRateFromUnit(FlowRateUnit.CubicFeetPerMinute, 2118.88);
    expect(result).toBeCloseTo(1, 2);
  });

  it('should convert L/s to m³/s', () => {
    expect(flowRateFromUnit(FlowRateUnit.LitersPerSecond, 1000)).toBe(1);
    expect(flowRateFromUnit(FlowRateUnit.LitersPerSecond, 1)).toBe(0.001);
  });

  it('should throw TypeError for NaN', () => {
    expect(() => flowRateFromUnit(FlowRateUnit.CubicMetersPerSecond, Number.NaN)).toThrow(TypeError);
  });

  it('should preserve value through round-trip m³/s -> CFM -> m³/s', () => {
    const original = 1;
    const cfm = flowRateToUnit(FlowRateUnit.CubicFeetPerMinute, original);
    const backToM3s = flowRateFromUnit(FlowRateUnit.CubicFeetPerMinute, cfm);
    expect(backToM3s).toBeCloseTo(original, 10);
  });

  it('should preserve value through round-trip m³/s -> GPM -> m³/s', () => {
    const original = 0.5;
    const gpm = flowRateToUnit(FlowRateUnit.GallonsPerMinute, original);
    const backToM3s = flowRateFromUnit(FlowRateUnit.GallonsPerMinute, gpm);
    expect(backToM3s).toBeCloseTo(original, 10);
  });
});

describe('getFlowRateUnitLabel', () => {
  it('should return correct labels', () => {
    expect(getFlowRateUnitLabel(FlowRateUnit.CubicMetersPerSecond)).toBe('m³/s');
    expect(getFlowRateUnitLabel(FlowRateUnit.CubicMetersPerHour)).toBe('m³/h');
    expect(getFlowRateUnitLabel(FlowRateUnit.CubicFeetPerMinute)).toBe('CFM');
    expect(getFlowRateUnitLabel(FlowRateUnit.LitersPerSecond)).toBe('L/s');
    expect(getFlowRateUnitLabel(FlowRateUnit.LitersPerMinute)).toBe('L/min');
    expect(getFlowRateUnitLabel(FlowRateUnit.GallonsPerMinute)).toBe('GPM');
  });

  it('should throw for unknown unit', () => {
    expect(() => getFlowRateUnitLabel(999 as FlowRateUnit)).toThrow('has no label');
  });
});
