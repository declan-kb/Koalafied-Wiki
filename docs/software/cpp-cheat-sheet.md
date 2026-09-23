# C++ Cheat Sheet

This page is for any little tips and tricks that help with C++ programming for WPILib. Some of the topics here are advanced and are noted as such. If you ever find yourself having to look up some piece of information related to software more than once, please consider adding it here so everyone can benefit.

## Desktop and Robot Building

When C++ code is built it can build up to the following 6 configurations.

- Debug code for the RoboRIO
- Release code for the RoboRIO
- Debug code for the desktop simulator
- Release code for the desktop simulator
- Debug code for the desktop tests
- Release code for the desktop tests

Whether the 4 desktop configurations are built is controlled by the following line in the `build.gradle` file.

```groovy
def includeDesktopSupport = true
```

- Building 6 different configurations takes a long time so always set the desktop support to `false` if you are only running code on the robot.
- When using the desktop simulator do not use the build command, instead, just use the **WPILib: Simulate Robot Code** command in VS Code. It will build just the one configuration that you are going to run.
- If you need to debug the tests then go to the Run and Debug tab in VS Code and select the **WPILib Test Debug** configuration. You will have to ensure that you build the code before running it. Note that this configuration only exists because we have edited the `launch.json` configuration file, but hopefully, it will be included in WPILib for 2024.

## Units

All calculations for real-world values (like distance or voltage) use the C++ units library, rather than just the `double` type. This helps to prevent logical errors, such as adding a distance in metres to a distance in feet and also makes converting between different units, like metres and feet, easy. However, it is initially very confusing and the error messages you get if you make a mistake are extremely hard to understand.

To convert from a unit value to a `double`, call the `value()` function. To convert from a `double` to a unit type, call the unit’s constructor or multiply by a value.

```cpp
units::meter_t v_m = 1.5_m;
double v = v_m.value();
units::meter_t v2_m = units::meter_t(v);
units::meter_t v3_m = v * 1_m;
```

Literal values of unit types can be written using special suffixes, however, there is no documentation for them, and looking them up in the code is difficult. Note that VS Code can now autocomplete them. Here is a list of the most common ones.

| Unit | Literal suffix |
|------|----------------|
| `units::second_t` | `_s` |
| `units::meter_t` | `_m` |
| `units::inch_t` | `_in` |
| `units::foot_t` | `_ft` |
| `units::meters_per_second_t` | `_mps` |
| `units::meters_per_second_squared_t` | `_mps_sq` |
| `units::radian_t` | `_rad` |
| `units::degree_t` | `_deg` |
| `units::turn_t` | `_tr` |
| `units::radians_per_second_t` | `_rad_per_s` |
| `units::degrees_per_second_t` | `_deg_per_s` |
| `units::radians_per_second_squared_t` | `_rad_per_s_sq` |
| `units::degrees_per_second_squared_t` | `_deg_per_s_sq` |
| `units::volt_t` | `_V` |

The units library has the ability to do mathematical functions. This includes `abs()`, `pow()`, `sin()`, `cos()`, `tan()` and others.

```cpp
#include <units/math.h>

units::meter_t pos1 = 1.5_m;
units::meter_t pos2 = 4.8_m;
units::meter_t distance = units::math::abs(pos1 - pos2);
```

## VS Code

[Visual Studio Code](https://code.visualstudio.com/) (VS Code for short) is the IDE (Integrated Development Environment) that we use for writing our robot code.

### Keyboard Shortcuts

VS Code has a lot of keyboard shortcuts. These are some of the most useful to remember.

| Command | Shortcut |
|---------|----------|
| Command Palette | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> |
| Toggle Header/CPP | <kbd>Alt</kbd> + <kbd>O</kbd> |
| Fold All | <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Ctrl</kbd> + <kbd>0</kbd> |
| Unfold All | <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Ctrl</kbd> + <kbd>J</kbd> |

## Gradle Build Targets

::: warning Advanced topic
You don't need this to get started.
:::

[Gradle](https://gradle.org/) is the ‘build system’ that is used for the robot code. That means it handles compiling the code and uploading it to the robot, but also other tasks like simulation, installing and updating libraries, and creating new projects.

There is a good ‘core concepts’ tutorial on the [Gradle website](https://docs.gradle.org/current/userguide/getting_started_eng.html). Note that Gradle started with Java so a lot of documentation talks mainly about that, but it can be used for C++.

To run a Gradle command use the following form in a VS Code terminal window. Note that `gradlew` is a wrapper script that should always be used for running Gradle.

```bash
./gradlew <options>
```

It is rarely necessary to run Gradle tasks directly as almost everything can be done using the WPILib commands exposed in VS Code. If you want to see the tasks available run `./gradlew tasks`.

The WPILib specific plugin for Gradle that makes everything work is called [GradleRIO](https://github.com/wpilibsuite/GradleRIO), there is some user documentation for it in the [WPILib docs](https://docs.wpilib.org/en/stable/docs/software/advanced-gradlerio/index.html).

## Git

Don’t use `git pull`. See this [video](https://www.youtube.com/watch?v=xN1-2p06Urc) for why.
