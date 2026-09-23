# CAD Guidelines

::: info
These guidelines are not final and are open for discussion. As we work each season we should remember to update them.
:::

## CAD Conventions

- Give all tabs and parts meaningful names.
- Give all drawing elements - features, planes and sketches - meaningful names.
- Use the units you want for a value. For example, if you want a 2mm gap in a document that is using inches type ‘2mm’ for the dimension. It will be shown in inches in the sketch, but will be remembered and shown as ‘2mm’ when you edit it.

## Part Studios

- Design the overall robot in inches. It is OK to design individual small parts in mm.
- Use branches to try out variations to a design.
- Use folders in Part Studios to group together the sketches and features that make a specific part. This is not always strictly possible, but do it where possible.

## Assemblies

- Use sub-assemblies. This makes mating parts much easier and is essential when the sub-assembly is used repeatedly.
- Define mate points on parts and subassemblies to make constructing assemblies easier.
- Use the ability to mate parts to a sketch to simplify assemblies where appropriate. For example spacing parts along a shaft, as in the 2022 robot indexer.
- Use MKCad or pre-existing CAD files wherever possible/practical.

## Document Structure

We can have a robot design either in a single document, or use multiple documents.

### Single Document

The overall tab structure of the document should have the following tabs in this order:

- ‘Variables’ variable studio with the major defining dimensions for the robot.
- ‘Master’ part studio that contains the master sketch, or sketches and space allocation parts.
- ‘Final Assembly’ containing the complete robot assembly.
- One folder per major mechanism, e.g. Drivebase, Intake, Shooter, etc. It should contain the following tabs in this order:
  - Mechanism part studio
  - Mechanism assembly
  - Mechanism subassemblies
  - Mechanism drawings
- A ‘Documents’ folder for attached documents - images, PDFs, etc.

### Multiple Documents

*To be written.*

## Folder Structure

The structure of the Onshape folders we store our CAD documents in should be as follows.

- One folder per year named after the 4 digit year number, e.g. “2022”.
- A ‘Library’ folder for documents containing reusable parts.

Other guidelines:

- Do not make copies of documents in team folders just to muck around with. To experiment with design use branches, or make copies to one of your own private folders.
- MAYBE make copies of documents before making them public to avoid having all the history in the document.

## CAD Review

Before a design is finished, go through the [CAD Checklist](./cad-checklist).

## Tips and Tricks

These tips are from [this video](https://streamyard.com/watch/M2AYhQsbmBjj).

- Origin cube (particularly for gear C2C, belts, sprockets etc.)
- Shortcut toolbar
- Mate connector as sketch plane
- Disable imprinting (I hate imprinting - I prefer explicitly deriving relevant geometry into the sketch)
- Constraint manager - determining internal constraints vs external
- Profile inspector - loose ends in sketches / unbounded shapes
- Layering layout sketches
- Derive parts before pocketing
- Flatten geometry
- Derive out for complex 3D printed parts
- Mate inference lock (use shift key)

### Simple Tips

- Learn how to roll back the design in a part studio. This is critical for the following:
  - Understanding how the design is built up
  - So you can insert sketches and features at the appropriate point in the design stack
- Similarly, reorder sketches and features so that they are grouped and ordered logically.

### Complex Tips

Structure the document to express the design intent. This is a complex concept.

## Feature Scripts

FeatureScripts can save you a lot of time. They can also slow down the document if not used carefully.

Recommended FeatureScripts:

- **Tube converter**: converts solid extrusions to hollow tubes with hole pattern.
