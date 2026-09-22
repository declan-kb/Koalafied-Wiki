# Basic Circuit Design

**Overall requirement:** Explain some simple electrical theory, and the different wiring systems on the robot.

**Explain the relationship between voltage, current and power delivery on the robot**

Electrical power is given by the product of voltage and current

$P\  = \ VI$

To increase/decrease power, you can vary either the voltage or current. On the robot, we have a 12V battery, and almost everything runs at 12V\*, so power to motors/electronics only varies with current. For simple components such as wires, Ohm's law applies:

$V = IR\ ,\ I\  = \ \frac{V}{R}$

Where $R$ is the resistance of a component. If the wrong (higher) voltage were applied to a component (e.g. the OrangePI, which expects 5V, not 12V), the extra current would probably cause some small component to melt, and the whole thing would stop working.

!!! note
    \*Motors are weird, see the [<u>DC motors document</u>](https://docs.google.com/document/u/0/d/1c0lU_rv7gFpK0vhmaeOoRLiwo3B5bBuv2DtqyB-CWCM/edit) for more if you are interested.

**Explain the different wiring systems on the robot**

The wiring for the robot has a few different categories/ways to separate them, but can be broadly broken into power and signal wires. Power wires are for delivering electricity to devices, while signal wires are for communication. Most often, power wires are large (6-12AWG), as they carry a lot of current, such as the main battery connection, or motor power. Other devices like the roboRIO, VRM, radio, etc. have power wires that are 18AWG, with the smallest being the CANCoder power (22AWG), since they draw less current. Signal wires are often small since there is no significant power transfer\*, the main example being the CAN bus. Limit switches and other sensors are also signal wires, commonly being 20AWG or smaller. USB and Ethernet cables are the physically largest signal wires, as they are actually 4 and 8 wires respectively, with lots of insulation and shielding.

!!! note
    \*Radio receives power via Power over Ethernet (PoE), so its (orange) Ethernet cable does carry some power.

**Explain the use of different circuit breakers for electronic devices on the robot**

Circuit breakers are a component that act as a safety mechanism to ensure that we never deliver an absurd amount of current to a device, hopefully stopping it from blowing up. Current causes heating within the breaker, and sustained current exceeding the limit heats the breaker to the point where it breaks the circuit until it cools, meaning no power to that device. Since we don’t want to lose power to a motor mid-match, we want the normal operation of the motor to never trip the breaker, and so must size the breaker accordingly. The largest single circuit from the PDH we can have is 40A, which we use on high-powered motors. For the small PDH slots, the highest limit is 20A. The hope is that if something goes wrong, the breaker stops the situation from escalating/damaging the part further. For this reason, we want to size the breaker as low as we can get away with, especially for delicate components.
