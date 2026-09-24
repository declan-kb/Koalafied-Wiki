# CAD Checklist

Go through this before you call a design finished or ask for a CAD review.
If something doesn't apply, skip it.

## General

- [ ] All sketches are fully constrained (no blue lines)
- [ ] No errors (red features in the feature list)
- [ ] Features and sketches are grouped into relevant folders (e.g. by part)
- [ ] Key dimensions come from variables or the master sketch, not typed-in numbers
- [ ] All tabs, parts, features and sketches have meaningful names
- [ ] Every part has a material assigned (or a mass override)
- [ ] Appearances match the real material

## Assemblies
- [ ] Sub-assemblies are used for repeated or self-contained mechanisms
- [ ] The group function is used for all static and non-repeated parts in an assembly

## Design Rules
See [Design Rules](./design-rules).
- [ ] Moving mechanisms have hard stops, especially anything with a limit switch
- [ ] Wiring has a path through the full range of motion
- [ ] Mechanisms outside the frame perimeter are compliant (can give way when hit)
- [ ] The mechanism mounts to the robot as one sub-assembly
- [ ] Bolts, not rivets, on anything that needs to come off
- [ ] Repeated parts are identical where possible

## Power Transmission

### Belts, Chain, Gears
- [ ] Centre to centre distance with a calculator (e.g. [ReCalc](https://www.reca.lc))
- [ ] Belt or gear is one that we have in stock, or available to buy 
  - Belts to purchase are available via [PT Parts](https://ptparts.com.au) or [Core Electronics](https://core-electronics.com.au)
  - Gears to purchase are available via [WCP](https://wcproducts.com) or [REV Global](https://revrobotics.global)
  - Stock list of belts and gears are available on our [google drive](https://docs.google.com/spreadsheets/d/1-WUpauPn0w8gaDgV8chQGcHm4MKQWR08GLBQOgj7PT4/edit?usp=drive_web&ouid=101850487222114186850)

### Shafts and Bearings
- [ ] Every shaft is supported by bearings at both ends where possible
  - Cantilevered shafts are allowed, but discuss with mechanical mentor
- [ ] Bearings and shafts are appropriately retained
  - On the outside of the robot, bearings must be specifically retained separate from shaft retention
- [ ] Shafts on the outside of the robot are appropriately protected (e.g. the bash bar on the 2025 intake)

## Manufacturing
See [Design Numbers](./design-rules#design-numbers).
- [ ] CNC internal corner radii are greater than 2mm, and parts fit on a 550 × 1150mm sheet
- [ ] Hole sizes follow the Design Numbers (e.g. 10-32 clearance = 5mm, 1.125in bearing = 1.13in)
- [ ] Holes into extrusion are on the 0.5in grid
