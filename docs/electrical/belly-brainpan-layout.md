# Belly/Brainpan Layout

**Overall requirement:** Explain the main considerations and techniques for bellypan layout.

## Explain the key considerations that arise when laying out the core electronics in the robot

Laying out the bellypan/brainpan changes every year, but there are some things that stay the same every year. The first thing to consider are the space that has been given to work in by mechanical, understanding where the crossbeams are in the drivebase, where the battery will go, and where wires can leave the brainpan are key, along with ensuring nothing is too close to swerve modules. Minimising wire lengths, especially for special cables like main power, USB, and Ethernet are good rules of thumb, and tend to help with organisation by reducing crisscrossing in the brainpan. The only absolute position requirement is that the pigeon needs to be as close to the middle of the robot as possible.

## Identify and explain common techniques for wire management within the belly/brainpan

The first thing to place is the PDH, as it has the most wires by a long way, often wanting to be fairly central, while minimising the length of the main power cable to the battery/main breaker. The pigeon should be placed next, as centrally as possible. The roboRIO and OrangePi should be placed close to where Ethernet/camera USB leaves the drivebase, minimising cable lengths to the radio/camera/RSL. RoboRIO CAN bus is another consideration, but often ends up going everywhere at least once, so is less critical. Other devices (VRM, CANivore, OrangePi power supply) should be placed wherever minimises crisscrossing and cable length, but are less critical as their wiring doesn’t leave the brainpan.

## Explain the benefits to using wire management within the belly/brainpan

A neat brainpan layout, in combination with wire management techniques such as bundling similar wires, labelling and tethering to the brainpan help to keep the core components clear and visible, and wires easier to follow. A clean brainpan is easier to inspect, and easier to repair, which are both incredibly important at competitions.
