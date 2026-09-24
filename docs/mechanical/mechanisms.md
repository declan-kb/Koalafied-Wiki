# Mechanisms

A quick overview of the common mechanisms on FRC robots. For more detail and example CAD, see the [Project B Mechanism Encyclopaedia](https://www.projectb.net.au/resources/robot-mechanisms/) and [FRCDesign.org Mechanism Examples](https://frcdesign.org/mechanism-examples/).

<!-- To add a picture, put it in docs/mechanical/images/ and uncomment the image line under each heading. -->

## Drivetrain

The base of the robot that drives it around the field.

### Swerve Drive

Each wheel is on its own module that can both drive and steer, so the robot can move in any direction while facing any way. It takes two motors per module. Most competitive teams use swerve.

<!-- ![Swerve drive](./images/mechanism-swerve.jpg) -->

### Tank Drive

Wheels on each side are driven together, and the robot turns by driving the sides at different speeds, like a tank. It's simple and robust, but can't move sideways. West Coast Drive is a common type.

<!-- ![Tank drive](./images/mechanism-tank.jpg) -->

## Intake

Picks game pieces up off the floor or from a human player station. Usually spinning rollers or wheels that pull the game piece in.

- **Over the bumper** - reaches out over the bumpers, often on a pivot, to grab game pieces
- **Under the bumper** - sits inside the frame and grabs game pieces through a gap under the bumpers

<!-- ![Intake](./images/mechanism-intake.jpg) -->

## Indexer

Moves game pieces from the intake to where they're scored from, and holds them in position until they're needed. Usually rollers or belts, often with a sensor to detect the game piece.

<!-- ![Indexer](./images/mechanism-indexer.jpg) -->

## Shooter

Launches game pieces at a target using one or more fast spinning wheels (flywheels). A heavier flywheel keeps its speed better between shots.

- **Hood** - an adjustable surface the game piece rolls along as it leaves, which changes the shot angle for different distances

<!-- ![Shooter](./images/mechanism-shooter.jpg) -->

## Turret

A rotating platform, usually carrying a shooter, so it can aim without turning the whole robot.

<!-- ![Turret](./images/mechanism-turret.jpg) -->

## Elevator

Lifts a mechanism straight up and down on sliding stages, usually driven by a belt, chain or rope.

- **Cascade** - each stage is pulled by the one below it, so all stages move at the same time. It's fast, but the lower stages carry more load.
- **Continuous** - one rope runs through all the stages, which move one after another. The load is spread evenly, but the rope path is longer and harder to rig.

<!-- ![Elevator](./images/mechanism-elevator.jpg) -->

## Arm

A mechanism that rotates around a pivot to move something up, down, in or out. Arms need a lot of torque when horizontal, see [Understanding Torque](./understanding-torque#pivot-arm).

- **Wrist** - a smaller pivot at the end of an arm or elevator, to angle whatever is on the end
- **Telescoping arm** - an arm that also extends in length

<!-- ![Arm](./images/mechanism-arm.jpg) -->

## Four-Bar Linkage

Two parallel bars joined at both ends that swing together. The end moves in an arc but stays at the same angle, which is useful for lifting something while keeping it level.

<!-- ![Four-bar linkage](./images/mechanism-four-bar.jpg) -->

## End Effector

Whatever is on the end of an arm or elevator that holds and releases the game piece, e.g. rollers, a claw or a suction cup.

<!-- ![End effector](./images/mechanism-end-effector.jpg) -->

## Climber

Lifts the robot off the ground at the end of the match, usually by hooking onto a bar or chain.

- **Winch** - winds up a rope or strap on a spool to pull the robot up
- **Telescoping hook** - extends a hook up to the bar, then pulls back down
- **Ratchet or brake** - holds the robot up after the match ends and the power turns off

<!-- ![Climber](./images/mechanism-climber.jpg) -->
