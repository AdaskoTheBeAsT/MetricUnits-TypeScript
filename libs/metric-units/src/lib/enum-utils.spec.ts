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

import { enumKeysAsString, enumValues } from './enum-utils';

enum TestEnum {
  First,
  Second,
  Third,
}

enum StringEnum {
  A = 'ValueA',
  B = 'ValueB',
}

describe('enumKeysAsString', () => {
  it('should return keys for numeric enum', () => {
    const keys = enumKeysAsString(TestEnum);
    expect(keys).toEqual(['First', 'Second', 'Third']);
  });

  it('should return keys for string enum', () => {
    const keys = enumKeysAsString(StringEnum);
    expect(keys).toEqual(['A', 'B']);
  });
});

describe('enumValues', () => {
  it('should return values for numeric enum', () => {
    const values = enumValues(TestEnum);
    expect(values).toEqual([0, 1, 2]);
  });

  it('should return values for string enum', () => {
    const values = enumValues(StringEnum);
    expect(values).toEqual(['ValueA', 'ValueB']);
  });
});
