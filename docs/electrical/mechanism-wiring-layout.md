# Mechanism Wiring Layout

**Overall requirement:** Show understanding of how to wire mechanisms neatly and reliably.

## Explain the key considerations for reliably wiring mechanisms

Unlike the belly/brainpan, mechanisms tend to have a relatively small number of wires involved, so organisation is less about visibility and more focussed on protecting wires. Moving mechanisms, game pieces, and other robots can all damage wires if they are not managed, and that is assuming the robot is mechanically perfect. Covers for wires and components (e.g. main breaker) are suitable for external wires that do not need to move, typically combined with cable ties to hold them in place. For moving wires, more sophisticated guides are needed to ensure the wires remain contained and do not snag. Strain relief is also necessary to prevent connectors from experiencing excessive forces, and reduce damage to components if something goes wrong.

## List the common options for wire protection/guiding

Wire protection and guiding are necessary for keeping wires constrained to where they are safe, and reducing the chance of damage from incidental contacts. For static wires, this mostly means plastic cable sheathing, which is commonly used for swerve modules back to the brainpan. For moving parts, energy chain is the most common, but for more complex situations like the turret on Lemon Launcher, we used either bi-directional energy chain or flexible cable wrap. As part of keeping the guides in place,(or wires if no guide is needed), cable ties are a great way to hold wires so long as they do not move relative to the mounting point.

## Identify what considerations arise with energy chain and confined wiring

Because energy chain must bend without much resistance, there is a limit for how full it can be. Ideally, an energy chain should only be ~50% full, otherwise the size of the energy chain should be increased if possible. An overfull energy chain will not bend as tightly, and will require more effort to bend, causing strain on the wires and the mechanism. Unlike most other cable protection, energy chain requires that the wires be passed through the chain, rather than wrapping it around the cable. Passing wires through requires that the connectors at each end be small enough to fit. For an energy chain of any decent size, this mainly applies to Deutsch DTM, although for a chain feeding a single motor, the Anderson Powerpole plug may also present difficulties. If the type of plug is required by other wiring around it, the solution is to simply disassemble the connector any time the wire needs to pass through, which is time-consuming. WAGO connectors are a great way to eliminate the need for connectors being passed through, but because they only clamp the wire, not the insulation, they are prone to losing grip on the wire unless properly strain relieved.
