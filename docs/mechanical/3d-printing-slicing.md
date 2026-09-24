# 3D Printing & Slicing Guide

How to get a part from Onshape onto one of our printers.

Prerequisites:

- Your own laptop. Use it rather than the school computers, which don't have the slicers installed.
- [PrusaSlicer](https://www.prusa3d.com/page/prusaslicer_424/) for the Prusa MK3S+ and MK4S
- [Bambu Studio](https://bambulab.com/en/download/studio) for the Bambu P1S
- A part designed for printing. See [3D Printing](./3d-printing) for our printers, filaments and design rules.

## 1. Export from Onshape

1. In the Part Studio, right-click the part in the parts list and click *Export*. To export every part in the Part Studio, right-click the Part Studio tab instead.
2. Set the export options:
   - **Format** - STEP or STL. Both slicers open either. STEP keeps holes and curves perfectly round, while STL turns them into flat faces.
   - **Units** - Millimetre (for STL). STL files don't store units, so a part exported in inches opens 25.4 times too small.
   - **Resolution** - Fine (for STL).
   - For several parts, tick *Export unique parts as individual files* so each part can be placed separately.
3. Click *Export* and save the file.

## 2. Set up the Slicer

Pick the printer and filament profiles before loading the part, because they set most of the print settings.

- **PrusaSlicer** - Choose the printer (Original Prusa MK3S+ or MK4S, 0.4 nozzle) and the filament in the drop-downs on the right. Switch to *Expert* mode (top right) to see all the settings.
- **Bambu Studio** - Choose the printer (Bambu Lab P1S 0.4 nozzle), the plate type that is actually on the printer, and the filament in the panel on the left.

## 3. Orient the Part

Orientation matters more than any other setting.

- **Put a large flat face on the bed** - Select the part, press *F* (*Place on face* / *Lay on face*) and click the face.
- **Layer lines are weak** - Printed parts are much weaker between layers than along them. Orient the part so the loads run along the layers, not pulling them apart. For example, print a bracket so its bolt holes don't split along a layer.
- **Holes are most accurate printed vertically** - Holes with their axis horizontal come out slightly undersized and oval.
- **Avoid supports where you can** - Re-orient or split the part first. If supports are needed, use *Support on build plate only* where possible, because supports inside holes are hard to remove.

## 4. Print Settings

Start from the profile's defaults and change only these:

| Setting | Value | PrusaSlicer | Bambu Studio |
|---------|-------|-------------|--------------|
| Perimeters | 2 | *Print Settings > Layers and perimeters > Perimeters* | *Strength > Walls > Wall loops* |
| Infill density | 20% | *Print Settings > Infill > Fill density* | *Strength > Sparse infill > Sparse infill density* |
| Infill pattern | Gyroid | *Print Settings > Infill > Fill pattern* | *Strength > Sparse infill > Sparse infill pattern* |

These are our standard settings for non-structural parts. For parts that carry load, add perimeters and infill, and ask a mentor if you're unsure.

- **Brim** - Add one for tall, thin parts or parts with a small footprint, so they don't come loose from the bed.
- **Multi-material (P1S only)** - Use the paint tool in Bambu Studio to colour faces, then match each colour to a filament slot on the AMS.

## 5. Slice and Check

Click *Slice* and check the preview before printing:

- Scroll through the layers and look for missing sections, thin walls that disappeared, or supports where you didn't want them.
- Check the print time and filament use are reasonable.

## 6. Send to the Printer

- **Prusa MK3S+** - *Export G-code* to an SD card and print from the printer's menu.
- **Prusa MK4S** - *Export G-code* to a USB stick and print from the printer's screen.
- **Bambu P1S** - Click *Print plate* to send it over the network, or *Export plate sliced file* to a microSD card.

Before starting, check the right filament is loaded, the bed is clean and nothing is left on it from the last print. Watch the first layer go down. Most failed prints fail there.
