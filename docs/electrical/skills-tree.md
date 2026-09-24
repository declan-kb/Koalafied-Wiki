# Electrical Skills Tree

This document lays out the different skills that are part of being able to create the electrical system on a robot. Beyond the very basics of how the components are connected, there will be two broad types of skills. The first type are practical skills pertaining to competency in particular construction tasks, such as soldering, and different connector types. Students with practical skills can contribute directly to physical construction of the electrical system under mentor or senior student supervision. The second skills family are theoretical skills, focused on understanding the principles behind the design of the electrical system, allowing students with these skills to take a more supervisory role. For students looking to improve their electrical skills, the Electrical Systems Manual is a great place to start and should be referred to during work.

Each skill contains several standard elements: a description, any prerequisite skills, what category the skill belongs to, the requirements needed to demonstrate the skill, and what activities achieving the skill unlocks. For the more theoretical skills, the ‘upon completion’ section is less fixed, as they less directly correlate to specific activities.

Each skill heading links to its study guide page.

## [Basic Electrical Knowledge](./basic-electrical-knowledge)

The first step in being able to contribute to electrical is to understand the basic components and principles of how they are connected. This skill is intended for all students to attain, regardless of whether they want to work on electrical, as part of understanding the different parts of the robot.

**Prerequisites:** None

**Category:** practical, theoretical

**Requirements:**

- Identify the common components of the electrical system: roboRIO, PDH/PDP, radio, main breaker, VRM, motor controllers, OrangePi + transformer, pigeon, CANivore, RSL, CANCoder
- Explain the function of core components of the electrical system: roboRIO, PDH/PDP, radio, main breaker, motor controllers, RSL
- Explain the need for different wire gauges for different purposes: battery, motors, electronics, signal
- Demonstrate understanding of the process of battery management.
- Demonstrate placing a battery in the robot, turning it on, then off, and removing the battery.

**Upon completion:** Ready to undertake Basic Electrical Knowledge II.

## [Basic Electrical Knowledge II](./basic-electrical-knowledge-ii)

Building on the major components are the basic skills required to work on the electrical system. This skill is intended to be the starting point for any students that intend to do electrical work.

**Prerequisites:** Basic Electrical Knowledge

**Category:** practical, theoretical

**Requirements:**

- Identify the different wire colours and their meanings
- Explain the function of extended core components of the electrical system: VRM, OrangePi + transformer, pigeon, CANivore, CANCoder
- Demonstrate the use of a multimeter for measuring voltage, resistance and continuity
- Identify common tools used in electrical work and their purpose
- Demonstrate ability to strip wires of various sizes (12 AWG or smaller)
- Explain and demonstrate the process of preparing and using WAGO 221/222 connectors to join wires

**Upon completion:** Qualified to use basic electrical tools, and begin learning other electrical skills.

## [Basic Soldering](./basic-soldering)

Soldering is a common process used to permanently join two wires. To qualify for the basic soldering skill, students should be able to reliably and independently solder two wires together.

**Prerequisites:** Basic Electrical Knowledge II

**Category:** practical, soldering

**Requirements:**

- Demonstrate understanding of the hazards associated with use of a soldering iron
- Explain, either verbally or through dry-run demonstration, proper soldering technique
- Demonstrate ability to strip, twist, solder, and heat-shrink a CAN bus wire
- Demonstrate ability to prepare multi-core wire for soldering

**Upon completion:** Qualified to solder small wires (18 AWG or smaller).

## [Power Soldering](./power-soldering)

Soldering large power wires presents a greater challenge than that of smaller power or signal wires, necessitating different techniques and greater proficiency. To qualify for the power soldering skill, students should be able to reliably and independently solder large diameter wires.

**Prerequisites:** Basic Soldering

**Category:** practical, soldering

**Requirements:**

- Demonstrate understanding of the additional challenges of soldering large diameter wires
- Explain, either verbally or through dry-run demonstration, proper soldering technique for large diameter wires
- Demonstrate ability to strip, twist, solder, and heat-shrink a 12AWG power wire

**Upon completion:** Qualified to solder any wires.

## [Component Soldering](./component-soldering)

Soldering wires to components, either with solder pads or through-hole connections, requires greater precision and competency with the soldering iron than joining two wires. To qualify for the component soldering skill, students should be able to reliably and independently solder wires to printed circuit board connections.

**Prerequisites:** Basic Soldering

**Category:** practical, soldering

**Requirements:**

- Explain, either verbally or through dry-run demonstration, proper technique for soldering wires to solder pads.
- Demonstrate ability to solder a wire to a solder pad.
- Explain, either verbally or through dry-run demonstration, proper technique for soldering wires to through-holes.
- Demonstrate ability to solder a wire to a through-hole connection.

**Upon completion:** Qualified to solder components.

## [Common Component Connectors](./common-component-connectors)

Most of the connections on the robot are not between two wires, but a wire being connected to one of the major components, making these the most important connectors to be familiar with. To qualify for the common component connectors skill, students should be able to reliably and independently connect wires to PDH, PDP, and VRM terminals.

**Prerequisites:** Basic Electrical Knowledge II

**Category:** practical, connectors

**Requirements:**

- Explain and demonstrate the different wire preparation requirements for the different common component connectors
- Demonstrate ability to connect wires to PDH slots (WAGO 221)
- Demonstrate ability to crimp ferrules to stripped wires
- Demonstrate ability to connect wires to PDP slots (WAGO Cage Clamp)
- Demonstrate ability to connect wires to VRM slots (Weidmuller)

**Upon completion:** Qualified to connect wires to PDH, PDP, and VRM slots.

## [Anderson Powerpole Connectors](./anderson-powerpole-connectors)

For larger power wires, Anderson Powerpole (“Mini Anderson”) connectors are the preferred choice, and are probably the most used wire-to-wire connector on any robot. To qualify for the Anderson powerpole connectors skill, students should demonstrate understanding of, and proficiency in, the process of making powerpole connectors.

**Prerequisites:** Common Component Connectors

**Category:** practical, connectors

**Requirements:**

- Explain and demonstrate the wire preparation required for powerpole connectors
- Demonstrate the process of crimping Anderson powerpole pins to prepared wires
- Explain and attempt the process of inserting crimped wires into the Anderson powerpole shrouds.

**Upon completion:** Qualified to make Anderson powerpole connectors (some assistance with shrouds is acceptable).

## [Specialised Component Connectors](./specialised-component-connectors)

Some of the core components (primarily the roboRIO), have a range of unique connectors found nowhere else on the robot. To qualify for the specialised component connectors skill, students should be able to reliably and independently assemble the described specialised connectors.

**Prerequisites:** Common Component Connectors

**Category:** practical, connectors

**Requirements:**

- Demonstrate ability to prepare and assemble roboRIO power connector
- Demonstrate ability to prepare and assemble RSL power connector
- Demonstrate ability to connect wires to OrangePi transformer terminals

**Upon completion:** Qualified to use specialised component connectors.

## [Spade Connectors](./spade-connectors)

Spade connectors are used to connect to limit switches, used for mechanism control. Due to the fragile nature of the limit switches, this skill will also touch on elements of ensuring the limit switch connections are well-built and robust. To qualify for the spade connectors skill, students should be able to reliably and independently prepare spade connectors, and demonstrate understanding of how to ensure the connections are robust.

**Prerequisites:** Common Component Connectors, Basic Soldering

**Category:** practical, connectors

**Requirements:**

- Explain the considerations for the wires that use spade connectors
- Explain and demonstrate the wire preparation required for spade connectors
- Demonstrate the process of crimping and soldering spade connectors to prepared wires
- Demonstrate understanding of how to implement strain relief once limit switches are connected

**Upon completion:** Qualified to prepare spade connectors.

## [Deutsch DTM Connectors](./deutsch-dtm-connectors)

Deutsch DTM connectors are incredibly robust connectors for use on small wires. Due to their complexity and how uncommonly they are used, this skill is fairly niche and should be completed towards the end of the skill tree. To qualify for the Deutsch DTM connector skill, students should demonstrate understanding of, and proficiency in, the process of making DTM connectors.

**Prerequisites:** Anderson Powerpole Connectors

**Category:** practical, connectors

**Requirements:**

- Explain and demonstrate the wire preparation required for Deutsch DTM connectors
- Identify the components required to construct the male and female plugs of a pair of Deutsch DTM connectors
- Demonstrate the process of crimping the Deutsch DTM pins for each half of a connector
- Demonstrate the process of constructing the male and female plugs of a Deutsch DTM connector

**Upon completion:** Qualified to make Deutsch DTM connectors (supervised?).

## [Basic Circuit Design](./basic-circuit-design)

In order to contribute to the design and layout of the electrical system, an understanding of the principles behind circuit design is necessary. This skill has some overlap with, and builds on Basic Electrical Knowledge II, as a foundational skill in the more theoretical aspects of electrical design.

**Prerequisites:** Basic Electrical Knowledge II

**Category:** theoretical

**Requirements:**

- Explain the relationship between voltage, current and power delivery on the robot
- Explain the different wiring systems on the robot
- Explain the use of different circuit breakers for electronic devices on the robot

## [Circuit Topologies](./circuit-topologies)

Different elements of the robot are wired in several different topologies. These topologies have different characteristics that are necessary for certain devices.

**Prerequisites:** Basic Circuit Design

**Category:** theoretical

**Requirements:**

- Explain series and parallel wiring, and what each of these provide in terms of voltage and current.
- Identify where on the robot these topologies are used
- Describe the topology of the CAN bus

## [Belly/Brainpan Layout](./belly-brainpan-layout)

The belly/brainpan of the robot houses almost all of the core electrical components. As such, there is a large number of wires that converge in the belly/brainpan, so a well-considered layout is necessary for the electronics to be visible and maintainable.

**Prerequisites:** Circuit Topologies (kinda)

**Category:** theoretical

**Requirements:**

- Explain the key considerations that arise when laying out the core electronics in the robot
- Identify and explain common techniques for wire management within the belly/brainpan
- Explain the benefits to using wire management within the belly/brainpan

## [Wire Gauge Selection](./wire-gauge-selection)

In order to contribute to the design and layout of the electrical system, an understanding of the principles behind circuit design is necessary. This skill builds on Basic Electrical Knowledge, as a foundational skill in the more theoretical aspects of electrical design.

**Prerequisites:** Basic Circuit Design

**Category:** theoretical

**Requirements:**

- Explain why different wire gauges are necessary
- List the common wire gauges used on the robot and their purpose

## [Mechanism Wiring Layout](./mechanism-wiring-layout)

Mechanism wiring is a very different skill to laying out the brainpan.

**Prerequisites:** Belly/Brainpan Layout

**Category:** theoretical

**Requirements:**

- Explain the key considerations for reliably wiring mechanisms
- List the common options for wire protection/guiding
- Identify what considerations arise with energy chain and confined wiring
