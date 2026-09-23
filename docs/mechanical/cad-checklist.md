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

## Assemblies
- [ ] Sub-assemblies are used for repeated or self-contained mechanisms
- [ ] The group function is used for all static and non-repeated parts in an assembly
- [ ] The replicate function is used for repeated COTS parts (e.g. bearings)

## Power Transmission

### Belts, Chain, Gears
- [ ] Centre to centre distance with a calculator (e.g. [Recalc](https://www.reca.lc))
- [ ] Belt or gear is one that we have in stock, or available to buy 
  - Belts to purchase are available via [PT Parts](https://ptparts.com.au) or [Core Electronics](https://core-electronics.com.au)
  - Gears to purchase are available via [WCP](https://wcproducts.com) or [Rev Global](https://revrobotics.global)
  - Stock list of belts and gears are available on our [google drive](https://docs.google.com/spreadsheets/d/1-WUpauPn0w8gaDgV8chQGcHm4MKQWR08GLBQOgj7PT4/edit?usp=drive_web&ouid=101850487222114186850)

### Shafts and Bearings
- [ ] Every shaft is supported by bearings at both ends where possible
  - Cantilevered shafts are allowed, but discuss with mechanical mentor
- [ ] Bearings and shafts are appropriately retained
  - On the outside of the robot, bearings must be specifically retained seperate from shaft retention
- [ ] Shafts on the outside of the robot are appropriately protected (e.g. the bash bar on the 2025 intake)



