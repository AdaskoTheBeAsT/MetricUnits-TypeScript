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

export enum FlowRateUnit {
  CubicMetersPerSecond,
  CubicMetersPerHour,
  CubicFeetPerMinute,
  LitersPerSecond,
  LitersPerMinute,
  GallonsPerMinute,
}

const flowRateUnitLabels: Record<FlowRateUnit, string> = {
  [FlowRateUnit.CubicMetersPerSecond]: 'm³/s',
  [FlowRateUnit.CubicMetersPerHour]: 'm³/h',
  [FlowRateUnit.CubicFeetPerMinute]: 'CFM',
  [FlowRateUnit.LitersPerSecond]: 'L/s',
  [FlowRateUnit.LitersPerMinute]: 'L/min',
  [FlowRateUnit.GallonsPerMinute]: 'GPM',
};

/**
 * Gets the display label for a flow rate unit.
 * @param unit - The flow rate unit
 * @returns The unit label (e.g., 'm³/s', 'CFM', 'GPM')
 * @throws Error if the unit is unknown
 */
export function getFlowRateUnitLabel(unit: FlowRateUnit): string {
  const label = flowRateUnitLabels[unit];
  if (label === undefined) {
    throw new Error(`${unit} of type FlowRateUnit has no label`);
  }
  return label;
}
