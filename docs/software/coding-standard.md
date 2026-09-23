# Koalafied C++ Coding Standard

The objective of this standard is to describe a layout for C++ code that is easy to read, maintain, and enhance. Consistent code is easier for multiple developers to read and understand.

These rules are a bit of a boring read. When getting started skip to the end and copy the style of the example code.

## Naming

All identifiers use specific naming conventions that depend on the kind of identifier (variable, type, function, etc) and the scope of the identifier (local, class member, class static, etc).

| Item | Convention | Examples |
|------|------------|----------|
| Local variables | Lower case underscores | `robot_drive` |
| Function parameters | Lower case underscores (1) | `robot_drive` |
| Class member variables | Lower case underscores, leading m | `m_robot_drive` |
| Class static variables | Lower case underscores, leading ms | `ms_robot_drive` |
| Struct member variables | Lower case underscores | `name`, `x`, `length` |
| Function names | Upper camel case | `CheezyDrive()` |
| Class names | Upper camel case | `DriveBase` |
| Interface names | Upper camel case, leading I | `IDriveBase` |
| Template class names | Upper camel case, leading T | `TAction` |
| Template parameters | Upper case underscores | `T`, `KEY_TYPE` |
| Constants | Upper camel case, leading k | `kLeftMasterTalonId` |
| Enumeration values | Upper camel case, leading k | `kTestMode` |
| Namespace names | Lower case underscores | `koalafied_test` |
| Macro names | Upper case underscores | `LOG_ERROR` |

1) When overriding a function always use the same parameter names as the original definition. For system or third party functions this means copying the original exactly, rather than using the ‘lower case underscores’ convention.

Identifier should be chosen to be as descriptive as possible, whilst not making the code too verbose. In particular, single character identifiers should only be used for loop variables and in mathematical code.

### Documenting Units

Variables that represent physical quantities should use the units library. This means that the type of the variable determines what the units are and so it is not necessary to include the units in the name of the variable. If ever dealing with something where the units library does not apply then the variable name should end with the units. This happens when dealing with Phoenix 5 native units..

```cpp
units::degrees motor_angle = 90_deg;
int motor_angle_native = motor_angle.value() * ENCODE_COUNT / 360.0; // Angle in native encoder units
```

## Commenting

Line comments (`//`) should be used, rather than span comments (`/* */`). This allows span comments to be used when debugging and working on code.

End of line comments should be used sparingly as they can be harder to read, but are a good choice for a short comment on a specific line.

### Headings

Code headings should be used as appropriate to separate the code into logical sections. Note that regardless of the column that the heading starts in it continues to the 80<sup>th</sup> column. A double line break should be used before a heading comment, except at the beginning of an enclosing scope, and a single line break should always be used after a heading comment.

```cpp
//================================================================
// Properties
```

### File Heading

File begin with a heading that contains the file name.

```cpp
//==============================================================================
// Robot.cpp
//==============================================================================
```

### Class Documentation

Classes should be documented using a description directly above the class declaration in the header file.

```cpp
// The main robot class that controls everything.
class Robot: public frc::IterativeRobot {
```

### Function Documentation

Functions should be documented using directly above the function declaration in the header file. The documentation should include a summary, description of all parameters and the return value if any.

```cpp
// Adjust a value by raising its absolute value to the given power, but
// preserving the sign
//
// value - number to adjust
// power - power to raise the value to
//
// Returns a number with the same sign as 'value' but with the absolute value
// modified.
double PowerAdjust(double value, double power);
```

Override functions should not be documented. The documentation for these functions is with the initial declaration in the base class and should not be duplicated.

### Member Variable Documentation

Member variables should be documented using a trailing comment where it fits and a comment on the preceding line otherwise.

```cpp
frc::RobotDrive* m_robot_drive; // Robot drive system

// A very complicated member variable that takes a lot of explanation to describe
int m_complex_var;
```

### TODO Comments

In some cases code may be incomplete, or require improvement, or checking, later. In such cases the comment should be included that begins with ‘TODO’ and details the issue. By always using ‘TODO’ and not alternatives like, ‘FIXME’, or ‘HACK’, we can easily search for problems and make sure they have been dealt with. There should be no ‘TODO’s left in the code by the time we get to competition.

```cpp
// TODO Ultrasonic sensor cannot use digital outputs 0 and 1 because they are used
// by the LEDs
```

## File Structure

There should be only one outer class defined, or declared, in each file. Multiple inner classes are allowed.

Header files should use a ‘.h’ extension and implementation files should use a ‘.cpp’ extension.

The file name should be the same as the class it contains.

### Header File Structure

A header file should contain the following, in this order,

1. #prama one directive
2. Header guard
3. #include statements
4. Forward declarations
5. Namespace opening, if any
6. Class declaration
7. Namespace closing, if any

### Implementation File Structure

An implementation file should contain the following, in this order,

1. File header comment
2. #include statements
3. Namespace opening, if any
4. Class definition
5. Namespace closing, if any

### Include File Order

Include files should be ordered in 3 groups with a blank line between each group, as followings,

1. Include file for this class
2. Other Koalafied header files
3. WPILib and other 3rd party header files

## Class Structure

All declarations and definitions inside a class should be grouped into the public, protected and private sections in that order. Within each section items should be in the following order:

1. Definitions of inner types: enums, structs, classes
2. Constructors and destructors
3. Class instance methods
4. Static class methods
5. Data members
6. Static data members

All class member variables must be initialised in their declaration, or in every constructor.

Do not make functions virtual unless required.

Class member variables must all be private.

## Code Structure

### Line Length

Code lines should be limited to a maximum of 120 characters where possible.

### Braces

Opening braces should be placed at the end of the line in all cases: classes, functions and control structures (if, for while, switch, etc.).

```cpp
class Foo {
    void Bar(int x) {
        for (int i = 0; i < x; i++) {
            DoSomthing(i);
        }
    }
}
```

Note that the ‘else’ is placed on the same line as both the preceding closing brace and the following open brace.

```cpp
if (condition) {
    DoSomething();
} else {
    DoSomethingDifferent();
}
```

All code blocks shall use curly braces except for single line if and if-else statements. Note that if either part of an if-else is multiline, then both parts must use braces.

```cpp
if (condition) DoSomething();

if (condition) DoSomething();
else DoSomethingDifferent();

// Not allowed
if (condition) {
    DoSomething();
} else DoSomethingDifferent();
```

### White Space

Spaces should be used rather than tabs.

All code blocks should be indented and the indenting should be 4 spaces. Except as noted below.

- The contents of namespaces should not be indented. This is to preserve editing width as all code is inside at least one namespace.

Line breaks should be used to improve the readability of the code. Only single line breaks should be used in functions and only single or double line breaks outside of functions. Typically, single line breaks should be used everywhere except in the following cases, where double line breaks should be used:

- Before heading comments
- Before a namespace declarations

Line breaks should not be used before a close brace line.

Statements should wrap to either the same ‘level’ in the syntactic hierarchy of the code for preference, or to one tab position in from the starting line of the statement, where the former is impractical.

```cpp
void doSomething(int parameter_a, int parameter_b, int parameter_c,
                 int parameter_d, int parameter_e, int parameter_f);

int really_long_variable = ReallyExceptionallyLongFunctionName(
    very_long_long_parameter, other parameters);
```

### Operator Spacing

Use a space either side of all operators, except for

- Unary operators – `+value`, `-value`, `value++`, `value--`,`!value`, `~value`
- Function call – `FunctionName()`
- Array indexing – `array_name[index]`
- Member selection – `object_name.Member`

Do not use spaces inside of any brackets (i.e. parenthesis) or square brackets.

Do use spaces inside of braces.

### Magic Numbers

Code should not use magic numbers. Instead a constant should be defined to increase readability. The source of numbers in the code should be documented, even if only to record that the value was found by experimenting. The scope of the constant should be the class level if it applies to multiple function, or if it represents an important tuneable parameter of the class, otherwise the scope of the constant should just be the function.

```cpp
// Label font size in points. This was determined by experimentation to look good
// at all zoom levels.
const int LABEL_FONT_SIZE_POINTS = 24;

SetFontSize(LABEL_FONT_SIZE_POINTS)
```

Trivial standard values may be used without a constant when the usage is clear from the comments. In particular, the following are not magic numbers,

1. 2 when doubling or halving something
2. 100 when dealing with percentages
3. Any power of 10 when converting the scale of units, eg millimetres to meters

### No Multi-Statement Lines

All statements should be on a single line. Excepting that a break statement can be on the same line in a single line case, within a switch statement.

## Example Code

### Example Header File

```cpp
//==============================================================================
// DriveBase.h
//==============================================================================

#pragma once

class CANTalon;
namespace frc
{
    class Joystick;
    class Talon;
    class RobotDrive;
}


// DriveBase controls everything to do with the robot drive base, including:
// - Motor speed controllers
// - RobotDrive object
// - Joystick object
//
// Implements the 'Cheezy' drive system.
class DriveBase {
public:
    //==========================================================================
    // Construction

    // Constructor
    DriveBase();

    // Destructor
    ~DriveBase();


    //==========================================================================
    // Setup and Shutdown

    // Setup the drive base for robot operation
    void Setup();

    // Setup the drive base with dummy speed controllers.
    // This function can be used without a real robot for some code testing.
    void SetupDummy();

    // Shutdown the drivebase
    void Shutdown();


    //==========================================================================
    // Operation

    // Do cheezy drive operation of the drive base. This function should be called
    // from TeleopPeriodic().
    void DoCheezyDrive();


    //==========================================================================
    // Properties

    // Get the current set position of the left side speed controllers
    //
    // Returns a value in the range -1.0 to 1.0
    double GetLeftDrive();

    // Get the current set position of the right side speed controllers
    //
    // Returns a value in the range -1.0 to 1.0
    double GetRightDrive();

private:
    //==========================================================================
    // Helper Functions

    // Adjust a value by raising its absolute value to the given power, but preserving
    // the sign
    //
    // value - number to adjust
    // power - power to raise the value to
    //
    // Returns a number with the same sign as 'value' but with the absolute value modified.
    double PowerAdjust(double value, double power);


    //==========================================================================
    // Member Variables

    CANTalon* m_left_front_speed_controller;    // Left front CAN Talon speed controller
    CANTalon* m_left_back_speed_controller;     // Left back CAN Talon speed controller
    CANTalon* m_right_front_speed_controller;   // Right front CAN Talon speed controller
    CANTalon* m_right_back_speed_controller;    // Right back CAN Talon speed controller
    frc::RobotDrive* m_robot_drive;             // Robot drive system
    frc::Joystick* m_joystick;                  // Joystick

    // Dummy left speed controller for testing without full robot
    frc::Talon* m_dummy_left_speed_controller;

    // Dummy right speed controller for testing without full robot
    frc::Talon* m_dummy_right_speed_controller;
};
```

### Example Implementation File

```cpp
//==============================================================================
// DriveBase.cpp
//==============================================================================

#include "DriveBase.h"

#include "RobotConfiguration.h"

#include <Talon.h>
#include <Joystick.h>
#include <RobotDrive.h>
#include <ctrlib/CANTalon.h>


//==============================================================================
// Construction

DriveBase::DriveBase() :
    m_left_front_speed_controller(NULL),
    m_left_back_speed_controller(NULL),
    m_right_front_speed_controller(NULL),
    m_right_back_speed_controller(NULL),
    m_robot_drive(NULL),
    m_joystick(NULL),
    m_dummy_left_speed_controller(NULL),
    m_dummy_right_speed_controller(NULL) {
}

DriveBase::~DriveBase() {
    Shutdown();
}


//==============================================================================
// Setup and Shutdown

void DriveBase::Setup() {
    m_joystick = new frc::Joystick(0);

    m_left_front_speed_controller = new CANTalon(RobotConfiguration::LEFT_FRONT_TALON_ID);
    m_left_back_speed_controller = new CANTalon(RobotConfiguration::LEFT_BACK_TALON_ID);
    m_right_front_speed_controller = new CANTalon(RobotConfiguration::RIGHT_FRONT_TALON_ID);
    m_right_back_speed_controller = new CANTalon(RobotConfiguration::RIGHT_BACK_TALON_ID);

    m_robot_drive = new frc::RobotDrive(m_left_front_speed_controller,
                                        m_left_back_speed_controller,
                                        m_right_front_speed_controller,
                                        m_right_back_speed_controller);

    // Set the MotorSafety expiration time on the robot drive.
    m_robot_drive->SetExpiration(0.1);
}

void DriveBase::SetupDummy() {
    m_joystick = new frc::Joystick(0);

    m_dummy_left_speed_controller = new frc::Talon(0);
    m_dummy_right_speed_controller = new frc::Talon(1);

    m_robot_drive = new frc::RobotDrive(m_dummy_left_speed_controller,
                                        m_dummy_right_speed_controller);

    // Set the MotorSafety expiration time on the robot drive.
    m_robot_drive->SetExpiration(5.0);
}

void DriveBase::Shutdown() {
    // Delete the joystick and clear the pointer
    delete m_joystick;
    m_joystick = NULL;

    // Delete the robot drive and clear its pointer, plus the pointers to
    // all the speed controllers (it owns then and will delete then for us).
    delete m_robot_drive;
    m_robot_drive = NULL;
    m_left_front_speed_controller = NULL;
    m_left_back_speed_controller = NULL;
    m_right_front_speed_controller = NULL;
    m_right_back_speed_controller = NULL;
    m_dummy_left_speed_controller = NULL;
    m_dummy_right_speed_controller = NULL;
}


//==============================================================================
// Operation

void DriveBase::DoCheezyDrive() {
    const int kLeftStickXAxis = 0;
    const int kLeftTriggerAxis = 2;
    const int kRightTriggerAxis = 3;
    const double kJoystickDeadzone = 0.05;
    const double kMovePower = 2.0;
    const double kRotatePower = 2.0;

    // The rotate input comes directly from the x axis of the joystick
    double joystick_x = m_joystick->GetRawAxis(kLeftStickXAxis);
    double rotate = joystick_x;
    if (fabs(rotate) < kJoystickDeadzone) rotate = 0.0;

    // Forward movement is controlled by the right trigger and backwards
    // movement by the left trigger.
    double move = 0.0;
    double left_trigger = m_joystick->GetRawAxis(kLeftTriggerAxis);
    double right_trigger = m_joystick->GetRawAxis(kRightTriggerAxis);
    if (left_trigger > 0.0 && right_trigger == 0.0) {
        move = -left_trigger;
    } else if (right_trigger > 0.0 && left_trigger == 0.0) {
        move = right_trigger;
    }

    // Apply a 'power' adjustment to the move and rotate values. This gives
    // more precision for small adjustments (this is like mouse pointer
    // acceleration).
    move = PowerAdjust(move, kMovePower);
    rotate = PowerAdjust(rotate, kRotatePower);

    // Get the robot drive to do arcade driving with our rotate and move values
    m_robot_drive->ArcadeDrive(move, rotate, false);
}


//==========================================================================
// Properties

double DriveBase::GetLeftDrive() {
    if (m_left_front_speed_controller != NULL) return m_left_front_speed_controller->Get();
    if (m_dummy_left_speed_controller != NULL) return m_dummy_left_speed_controller->Get();
    return 0.0;
}

double DriveBase::GetRightDrive() {
    if (m_right_front_speed_controller != NULL) return m_right_front_speed_controller->Get();
    if (m_dummy_right_speed_controller != NULL) return m_dummy_right_speed_controller->Get();
    return 0.0;
}


//==========================================================================
// Helper Functions

double DriveBase::PowerAdjust(double value, double power) {
    if (value >= 0.0) return pow(value, power);
    else return -pow(-value, power);
}
```

## WPILib Coding Standard

This standard is based on the WPILib coding standard found [here](https://github.com/wpilibsuite/styleguide) (the guide is in ‘cppguide.html’). These rules have been condensed, to make them easier to read, and modified slightly. In all cases the modifications either are for things not addressed by the WPILib standard, are slight enhancements, or are for things where the WPILib code itself, or the example code from WPI, does not follow their own standard.

The differences are:

1. Filename are meant to be lower case. Instead we have the filename being the same as the class (i.e. upper camel case). This is seems more consistent and is the convention used by the example code in the Eclipse plugin.
2. We have a convention for static class data members (we prefix ‘ms\_’, rather than just ‘m\_’), interface classes and templates. This is a simple enhancement and follows conventions used elsewhere (eg. Microsoft).
3. Accessor and mutators (aka getter and setters) are meant to use only lower case and follow the member variable name. We ignore this as it is clearly not being used by WPILib.
4. Global variables are meant to use the same naming convention as constants, which would potentially be very confusing (possibly this is just a mistake in their standard). We should not use global variables anyway, so this standard does not specify a convention.
5. We are not using the 80 character line limit. Eclipse examples do not do this always, although they seem to mostly be close to it. This is very old school and often leads to wrapping code that is still fits on the any screen someone is likely to be using.
6. We are using 4 character indenting not 2. Eclipse examples all use 4.
7. We are not intending the public, protected and private by one space. Eclipse samples do not do this.
