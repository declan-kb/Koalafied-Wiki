# Onshape Tips & Tricks

::: info For experienced users
These tips assume you already know the basics. If you're new to Onshape, start with [Onshape](./onshape).
:::

Many of these tips are from [this video](https://streamyard.com/watch/M2AYhQsbmBjj), which shows them in action.

## Working Faster

### Shortcut Toolbar

Press **S** to open a toolbar of your most-used tools at the cursor. You can choose which tools it shows.

### Origin Cube

A [feature script](./feature-scripts) for laying out gears, belts and sprockets. It:

- helps with centre to centre distances
- gives you the pitch diameters of gears, sprockets and pulleys. Sketching from these shows how the parts actually mesh, so your design intent is clear to anyone who opens it
- gives assemblies a fixed point to mate to the origin once you've grouped the static parts, so the rest comes together more easily

## Sketches

### Sketch on a Mate Connector

Pick a mate connector as your sketch plane. You can sketch at any position and angle without making an extra plane.

### Turn Off Imprinting

By default, sketches pick up edges from existing geometry on the same plane, which can create regions you didn't mean to make. Turn off imprinting and bring in only the edges you need with **Use** (**U**).

### Layer Your Layout Sketches

Put the key geometry, like gears and other power transmission, in one sketch. Draw the part outline in a second sketch on top. The key geometry stays easy to find and change.

### Use the Constraint Manager

It shows which constraints are internal to the sketch and which are external (tied to other geometry). Use it to track down an unexpected constraint that is causing an error.

### Find Open Profiles

If a region won't shade, the sketch has a gap or a loose end. The profile inspector shows you the open profiles so you can close them.

## Performance

Big Part Studios get slow to regenerate. Keep heavy features out of the main one by using **Derived** to bring the part into its own Part Studio, then finish it there. Do this for:

- **Pocketing** - it adds a lot of features
- **Complex 3D printed parts** - parts with lots of detail

## Assemblies

### Lock Mate Inference

When placing a mate, hold **Shift** to lock onto the mate connector you're hovering over, so it doesn't jump to a nearby face.
