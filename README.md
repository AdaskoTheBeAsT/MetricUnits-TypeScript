# Metric Units TypeScript

<p align="center">
  <strong>🌡️ Type-safe unit conversions for HVAC, building automation, and thermodynamics</strong>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#why-metric-units">Why?</a> •
  <a href="#api-reference">API</a> •
  <a href="#available-units">Units</a>
</p>

---

## Why Metric Units?

**Stop writing error-prone unit conversion code.** If you've ever:

- 🐛 Spent hours debugging because someone mixed up °C and °F
- 🔄 Written the same temperature conversion formula for the 10th time
- 😤 Dealt with magic numbers like `1.8`, `32`, or `273.15` scattered across your codebase
- 🤔 Wondered "wait, is this value in Pascals or kPa?"

**This library is for you.**

### ✨ What Makes It Different

| Feature | Metric Units | DIY Approach |
|---------|--------------|--------------|
| **Type Safety** | Full TypeScript enums prevent invalid units at compile time | Runtime errors waiting to happen |
| **Validation** | Built-in checks for NaN, Infinity, and physically impossible values | Silent failures |
| **Tree-Shakeable** | Import only what you need, bundle only what you use | — |
| **Zero Dependencies** | Lightweight, no bloat | — |
| **Battle-Tested** | 148 unit tests covering edge cases | Hope for the best |
| **Display Labels** | Get proper unit symbols (°C, m³/s, kPa) for UI rendering | Hardcode strings everywhere |

### 🎯 Perfect For

- **HVAC Systems** — Temperature, pressure, airflow, humidity
- **Building Automation** — Sensor data normalization  
- **IoT Dashboards** — Display values in user-preferred units
- **Engineering Tools** — Scientific calculations with confidence
- **Data Pipelines** — Convert between metric and imperial systems

---

## Installation

```bash
npm install metric-units
```

```bash
yarn add metric-units
```

```bash
pnpm add metric-units
```

---

## Quick Start

```typescript
import {
  temperatureToUnit,
  temperatureFromUnit,
  TemperatureUnit,
  getTemperatureUnitLabel,
} from 'metric-units';

// Convert 25°C to Fahrenheit
const fahrenheit = temperatureToUnit(TemperatureUnit.Fahrenheit, 25);
// → 77

// Convert 77°F back to Celsius
const celsius = temperatureFromUnit(TemperatureUnit.Fahrenheit, 77);
// → 25

// Get display label for UI
const label = getTemperatureUnitLabel(TemperatureUnit.Celsius);
// → '°C'
```

### Real-World Example: HVAC Dashboard

```typescript
import {
  temperatureToUnit,
  TemperatureUnit,
  getTemperatureUnitLabel,
  airPressureToUnit,
  PressureUnit,
  getPressureUnitLabel,
  flowRateToUnit,
  FlowRateUnit,
  getFlowRateUnitLabel,
} from 'metric-units';

// Sensor data comes in SI units
const sensorData = {
  supplyAirTemp: 12.5,      // °C
  staticPressure: 250,       // Pa
  airflow: 0.47,             // m³/s
};

// User prefers imperial units
const userUnits = {
  temperature: TemperatureUnit.Fahrenheit,
  pressure: PressureUnit.inH2O,
  flowRate: FlowRateUnit.CubicFeetPerMinute,
};

// Convert for display
const display = {
  temperature: `${temperatureToUnit(userUnits.temperature, sensorData.supplyAirTemp).toFixed(1)} ${getTemperatureUnitLabel(userUnits.temperature)}`,
  pressure: `${airPressureToUnit(userUnits.pressure, sensorData.staticPressure).toFixed(2)} ${getPressureUnitLabel(userUnits.pressure)}`,
  airflow: `${flowRateToUnit(userUnits.flowRate, sensorData.airflow).toFixed(0)} ${getFlowRateUnitLabel(userUnits.flowRate)}`,
};

// → { temperature: '54.5 °F', pressure: '1.00 inH₂O', airflow: '996 CFM' }
```

---

## API Reference

Every unit category follows the same consistent pattern:

```typescript
// Convert FROM base unit TO target unit
valueInTargetUnit = xxxToUnit(TargetUnit, valueInBaseUnit);

// Convert FROM target unit TO base unit  
valueInBaseUnit = xxxFromUnit(SourceUnit, valueInSourceUnit);

// Get display label
label = getXxxUnitLabel(unit);
```

### Functions by Category

| Category | To Unit | From Unit | Get Label |
|----------|---------|-----------|-----------|
| Temperature | `temperatureToUnit()` | `temperatureFromUnit()` | `getTemperatureUnitLabel()` |
| Pressure | `airPressureToUnit()` | `airPressureFromUnit()` | `getPressureUnitLabel()` |
| Height | `heightToUnit()` | `heightFromUnit()` | `getHeightUnitLabel()` |
| Enthalpy | `enthalpyToUnit()` | `enthalpyFromUnit()` | `getEnthalpyUnitLabel()` |
| Specific Humidity | `specificHumidityToUnit()` | `specificHumidityFromUnit()` | `getSpecificHumidityUnitLabel()` |
| Flow Rate | `flowRateToUnit()` | `flowRateFromUnit()` | `getFlowRateUnitLabel()` |
| Power | `powerToUnit()` | `powerFromUnit()` | `getPowerUnitLabel()` |
| Velocity | `velocityToUnit()` | `velocityFromUnit()` | `getVelocityUnitLabel()` |

### Input Validation

All conversion functions validate input and throw descriptive errors:

```typescript
temperatureToUnit(TemperatureUnit.Kelvin, NaN);
// → TypeError: temperature must be a finite number, got NaN

temperatureToUnit(TemperatureUnit.Kelvin, -300);
// → Error: Temperature cannot be below absolute zero (-273.15°C)

airPressureToUnit(PressureUnit.Pascal, -100);
// → Error: Pressure cannot be negative
```

---

## Available Units

| Category | Base Unit | Units |
|----------|-----------|-------|
| **Temperature** | Celsius (°C) | `Celsius` · `Fahrenheit` · `Kelvin` |
| **Pressure** | Pascal (Pa) | `Pascal` · `KiloPascal` · `Bar` · `Psia` · `mmH2O` · `inH2O` · `ftH2O` · `mmHg` · `inHg` · `ftHg` |
| **Height** | Meters (m) | `Meters` · `Feet` |
| **Enthalpy** | kJ/kg | `KiloJoulesPerKilogram` · `BritishThermalUnitPerPound` |
| **Specific Humidity** | g/kg | `GramsPerKilogram` · `KilogramsPerKilogram` · `PoundsPerPound` |
| **Flow Rate** | m³/s | `CubicMetersPerSecond` · `CubicMetersPerHour` · `CubicFeetPerMinute` (CFM) · `LitersPerSecond` · `LitersPerMinute` · `GallonsPerMinute` (GPM) |
| **Power** | Watt (W) | `Watt` · `Kilowatt` · `BtuPerHour` · `Horsepower` · `TonOfRefrigeration` |
| **Velocity** | m/s | `MetersPerSecond` · `FeetPerMinute` · `FeetPerSecond` · `KilometersPerHour` · `MilesPerHour` |

---

## Breaking Changes

### v2.0.0

#### Namespace Pattern Removed

The `Unit.getLabel()` namespace pattern has been replaced with standalone functions for better tree-shaking and idiomatic TypeScript:

**Before (v1.x):**

```typescript
import TemperatureUnit from 'metric-units/TemperatureUnit';

const label = TemperatureUnit.getLabel(TemperatureUnit.Celsius);
```

**After (v2.0):**

```typescript
import { TemperatureUnit, getTemperatureUnitLabel } from 'metric-units';

const label = getTemperatureUnitLabel(TemperatureUnit.Celsius);
```

#### File Names Normalized

All file names now use kebab-case consistently:

| Old Import Path                    | New Import Path                       |
| ---------------------------------- | ------------------------------------- |
| `metric-units/TemperatureUnit`     | `metric-units/temperature-unit`       |
| `metric-units/PressureUnit`        | `metric-units/pressure-unit`          |
| `metric-units/HeightUnit`          | `metric-units/height-unit`            |
| `metric-units/EnthalpyUnit`        | `metric-units/enthalpy-unit`          |
| `metric-units/SpecificHumidityUnit`| `metric-units/specific-humidity-unit` |
| `metric-units/enumUtils`           | `metric-units/enum-utils`             |

#### Migration Guide

1. Update imports to use named exports instead of default exports
2. Replace `Unit.getLabel(value)` calls with `getUnitLabel(value)` function calls
3. Update any direct file imports to use kebab-case paths

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

```bash
# Clone the repository
git clone https://github.com/AEPi-Zeta/MetricUnits-TypeScript.git

# Install dependencies
yarn install

# Run tests
yarn test

# Build
yarn build
```

---

## License

GNU Affero General Public License v3.0 (AGPL-3.0)

---

<p align="center">
  Made with ❤️ for the HVAC and building automation community
</p>
