# Markdown Cheatsheet

Markdown is plain text with a few symbols for formatting. Each example below shows what you type, then what it looks like.

## Headings

```md
# Page title (only one per page, at the top)
## Section
### Sub-section
```

Sections (`##`) and sub-sections (`###`) appear in the "On this page" list on the right.

## Bold and italic

```md
This is **bold** and this is *italic*.
```

This is **bold** and this is *italic*.

## Lists

```md
- A bullet point
- Another one
  - Indent two spaces for a sub-point

1. First step
2. Second step
```

- A bullet point
- Another one
  - Indent two spaces for a sub-point

1. First step
2. Second step

## Checklists

```md
- [ ] Not done yet
- [x] Done
```

- [ ] Not done yet
- [x] Done

## Links

```md
[WPILib docs](https://docs.wpilib.org)
[Another wiki page](../electrical/basic-soldering)
```

[WPILib docs](https://docs.wpilib.org)
[Another wiki page](../electrical/basic-soldering)

For links to other wiki pages, use the file path without `.md`. `../` means "go up one folder".

## Images

```md
![Description of the image](./images/file-name.png)
```

![Team Koalafied logo](/logo.svg){width=80}

Put image files in the section's `images` folder. See [How to edit](./how-to-edit#adding-images).

## Tables

```md
| Wire  | Gauge |
|-------|-------|
| Power | 12AWG |
| CAN   | 22AWG |
```

| Wire  | Gauge |
|-------|-------|
| Power | 12AWG |
| CAN   | 22AWG |

The columns don't have to line up in the text, but it's easier to read if they do.

## Code

Use single backticks for `inline code`. For a block of code, put three backticks on the line above and below, with the language name after the first three:

````md
```cpp
double speed = 0.5;
```
````

```cpp
double speed = 0.5;
```

Useful language names: `cpp`, `java`, `bash`, `json`.

## Maths

```md
Inline: $P = VI$

On its own line:

$$R = \frac{\rho L}{A}$$
```

Inline: $P = VI$

On its own line:

$$R = \frac{\rho L}{A}$$

## Callouts

Use these to make important information stand out.

```md
::: info
Extra background that's nice to know.
:::

::: tip
A helpful hint.
:::

::: warning
Be careful here.
:::

::: danger
Safety warning! Something could break or someone could get hurt.
:::
```

::: info
Extra background that's nice to know.
:::

::: tip
A helpful hint.
:::

::: warning
Be careful here.
:::

::: danger
Safety warning! Something could break or someone could get hurt.
:::

You can give a callout its own title: `::: warning Out of date`.

## Collapsible sections

```md
::: details Click to show the answer
Hidden until clicked.
:::
```

::: details Click to show the answer
Hidden until clicked.
:::
