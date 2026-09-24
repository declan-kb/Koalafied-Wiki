# 3D Printing

How we design parts for 3D printing: our printers, settings, filament and the hardware that goes with printed parts.

For how to export, slice and print a part, see the [3D Printing & Slicing Guide](./3d-printing-slicing).

## Printers

| Printer | Bed size | Notes |
|---------|----------|-------|
| Prusa MK3S+ | 250 × 210mm | |
| Prusa MK4S | 250 × 210mm | Faster than the MK3S+ |
| Bambu P1S | 256 × 256mm | Faster than the MK3S+. Can print multiple materials in one part |

## Design Rules

**Standard Print Settings** - Use 2 perimeters and 20% infill for non-structural parts. We use gyroid infill by default.

**Keep Prints Away from Impacts** - Avoid 3D printed parts anywhere they could be hit.

## What We Print

- **Pulleys**
- **Belts** - For prototyping only, in TPU 98A.
- **Spacers**
- **Tube plug sleeves**
- **Spur gears** - Low duty only, and with caution.
- **Cases for electronics** - e.g. cameras.
- **Wheels**
- **Cable clips**
- **Mounting brackets**

## Filament

| Filament | Strength / application | Buy from |
|----------|------------------------|----------|
| PLA | Stiff and easy to print, but brittle and softens with heat. Prototypes and low load parts | eSun or [Bambu Lab](https://bambulab.com) |
| PETG | Tougher and less brittle than PLA. General robot parts, e.g. spacers, brackets and cases | eSun or [Bambu Lab](https://bambulab.com) |
| PC | Strongest and most impact and heat resistant, but harder to print (needs an enclosed printer). Loaded parts, e.g. pulleys and gears | |
| TPU 95A | Flexible and rubbery. Compliant parts, bumpers and grippy surfaces, e.g. roller and wheel treads | eSun |
| TPU 98A | Stiffer than 95A but still flexible. Prototype belts | |

## Hardware for Printed Parts

| Hardware | Buy from |
|----------|----------|
| 10-32 expanding / heat-set inserts | Thrifty or WCP |
| M3 bolts and heat-set inserts | AliExpress |
