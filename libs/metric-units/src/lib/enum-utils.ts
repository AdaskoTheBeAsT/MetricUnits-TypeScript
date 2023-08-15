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

export function enumKeysAsString<TEnum>(theEnum: TEnum): (keyof TEnum)[] {
  const keys = Object.keys(theEnum as object).filter(
    (x) => +x + '' !== x && typeof theEnum[x as keyof TEnum] !== 'function'
  ) as (keyof TEnum)[];
  return keys;
}

export function enumValues<TEnum>(theEnum: TEnum): TEnum[keyof TEnum][] {
  const keys = enumKeysAsString(theEnum);
  return keys.map((key) => theEnum[key]);
}
