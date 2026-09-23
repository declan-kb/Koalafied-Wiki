# Understanding Torque

::: info
This page is a draft. Some sections are still just headings; feel free to fill them in.
:::

## Definition

Torque is a very simple idea. It is just rotational force.

Torque has a very simple equation

$$T = Fr$$

Where

- $F$ is the force in Newtons [N]
- $r$ is the radius in metres [m]
- $T$ is the torque in Newton metres [Nm]

Force is tangential to the motion, that is it is at right angles to the radius.

## Newton’s Laws

Rotational motion is just like force in that it obeys Newton’s laws of motion:

1. A body remains at rest, or rotating at a constant speed, unless it is acted upon by a torque.
2. $T = I\alpha$ (rather than $F = ma$)
3. If two bodies exert torques on each other, these torques have the same magnitude but opposite directions.

## Seesaw

If two people of equal weight sit on a seesaw then it will balance.

If one of the people is twice as heavy they need to sit at half the distance to make the seesaw balance.

## Gears

Where gears mesh they push on each other with equal force.

$$F_1 = F_2$$

$$\frac{T_1}{r_1} = \frac{T_2}{r_2}$$

$$\frac{T_1}{T_2} = \frac{r_1}{r_2}$$

The radius of the gear is proportional to the number of teeth $g$ on the gear so

$$\frac{T_1}{T_2} = \frac{g_1}{g_2}$$

## Climbing Pulley

When we climb we use a spool with a small radius to wind a cord that lifts the robot.

## Pivot Arm

The force on a pivot arm is gravity pushing downward. When the arm is horizontal all the gravitational force produces a torque that the motor must overcome to move the arm. When the arm is vertical the weight of the arm produces no torque on the arm.

## Force Vector

When there is a force that is not acting tangentially we resolve it into a tangential component and a radial component.

Alternatively we can use the force as it is and calculate the radius as the distance to the line of the force.

## Ladder Against a Wall

Calculating the forces on a ladder against a wall is a classic problem.

Note that because the ladder is not actually rotating there is no ‘centre point’ to calculate the torque around. We can actually use any point as the centre and the best method is to choose a point that makes the calculation easier.

## 2026 Climbing Robot

The simple hook climb like we used in 2026 is very similar to the ladder against the wall.
