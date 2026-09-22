# Wire Gauge Selection

**Overall requirement:** Show understanding of the purpose of different wire gauges and their place on the robot.

**Explain why different wire gauges are necessary**

While often treated as having no resistance when doing simple circuit models, wires do actually have some resistance, related to their length and cross-sectional area, given by the formula

$R = \frac{\rho L}{A}$

$L,A$ are the length and area of the wire, $\rho$ is the resistivity of the metal. The power dissipated by a wire is given by

$P\  = \ VI\  = I^{2}R$

Power is lost in a wire in the form of heat, which can be very dangerous. As some wires in the robot carry a lot of current, we need to reduce heat losses by having a wire with low resistance. As the length and resistivity are fixed (for copper wire) we minimise resistance by using thicker wires (larger area). To double the current capacity of a wire, we need to quadruple the area, as the current is squared in the power loss equation.

**List the common wire gauges used on the robot and their purpose**

The game manual lays out the minimum size for wires rated to a given current. To pass inspection, the wire size for a given circuit must meet or exceed the gauge corresponding to the capacity of its circuit breaker. For almost everything, we use a reduced set of the wire gauges specified in the game manual for simplicity, given in the table.

|                    |                             |
|:-------------------|-----------------------------|
| Current rating (A) | Minimum wire size AWG (mm2) |
| 120 A              | 6 (16)                      |
| 40 A               | 12 (4)                      |
| 20 A               | 18                          |
| <1 A (Signal)     | 22                          |

The only circuit that is 120A is the main battery connection. High-power motors (Kraken/Falcon) use 10AWG (what they come with), but we have 12AWG which is also fine. We use the same wire for 40A or 30A circuits. Power for large components (roboRIO, VRM, OrangePi power supply), and low-power motors (JE-PLG) uses 18AWG (commonly dual-core with grey outer). CAN bus, CANCoder power, and sensors are 22AWG. The only other one we sometimes use is a dual-core 20AWG for things like RSL power or limit switches because it is stronger than 22AWG for being at the end of a mechanism.
