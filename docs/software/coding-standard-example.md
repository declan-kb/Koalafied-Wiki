# Coding Standard Example

An example header and implementation file that follow the [C++ Coding Standard](./coding-standard). When in doubt, copy this style.

::: info
This example is from an older robot (it uses `CANTalon` and `frc::RobotDrive`, which are no longer used), but the layout, naming and commenting style are still what we follow.
:::

## Example Header File

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

## Example Implementation File

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
    // all the speed controllers (it owns them and will delete them for us).
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


//==============================================================================
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


//==============================================================================
// Helper Functions

double DriveBase::PowerAdjust(double value, double power) {
    if (value >= 0.0) return pow(value, power);
    else return -pow(-value, power);
}
```
