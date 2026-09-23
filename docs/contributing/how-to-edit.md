# How to Edit This Wiki

Anyone on the team can fix a mistake or add to this wiki, and you don't need to install anything. Every page is a plain text file written in [Markdown](./markdown-cheatsheet), stored on GitHub. When you save a change, the website rebuilds itself.

## 1. Get access

1. Create a free account at [github.com](https://github.com/signup) if you don't have one.
2. Ask a lead or mentor to add you to the `Koalafied-Wiki` repository. Tell them your GitHub username.

## 2. Edit a page

1. Go to the page you want to change on the wiki.
2. Scroll to the bottom and click **Edit this page on GitHub**.
3. GitHub opens the page's text file in an editor. Make your changes.
4. Click the **Preview** tab to check how it will look.
5. Click **Commit changes...**, write a short message saying what you changed (e.g. "Fix typo in soldering steps"), and click **Commit changes** again.

## 3. Wait for the site to update

The website rebuilds itself automatically and your change will be live in about **1–2 minutes**. Refresh the page to see it.

If your change doesn't appear after 5 minutes, the build may have failed (usually because of a broken link). Open the repository on GitHub and click the **Actions** tab. A red ✗ means something went wrong. Click it to see the error, or ask for help.

## Adding a new page

1. Open the repository on GitHub and go into the `docs` folder, then the folder for the right section (e.g. `docs/software`).
2. Click **Add file → Create new file**.
3. Name it with lowercase words joined by dashes, ending in `.md`, e.g. `vision-setup.md`.
4. Start the file with a title line, then write your content:

   ```md
   # Vision Setup

   Your content here...
   ```

5. Commit the new file.
6. Add the page to the left-hand menu. Open `docs/.vitepress/config.mts`, click the pencil icon to edit, find the `sidebar` section for your folder, and copy an existing line. For example, to add the page above under Software:

   ```ts
   { text: 'Vision Setup', link: '/software/vision-setup' },
   ```

   The `link` is the folder and file name **without** `.md`. Watch the commas and quote marks, since a missing one will break the build.

7. Commit the change.

## Adding images

1. In the section's folder, open the `images` folder (e.g. `docs/software/images`). If there isn't one yet, create a file called `images/placeholder.txt` to make the folder, then delete the placeholder later.
2. Click **Add file → Upload files** and upload your image. Give it a descriptive name with dashes, like `intake-roller-side-view.png`, not `IMG_2041.png`.
3. In your page, add:

   ```md
   ![Side view of the intake roller](./images/intake-roller-side-view.png)
   ```

   The text in square brackets describes the image for anyone who can't see it.

## Bigger edits

To edit several files at once, open the repository on GitHub and press the <kbd>.</kbd> (full stop) key. This opens **github.dev**, a full editor in your browser where you can see every file, edit many at once and commit them together.

## Running the site on your own computer (optional)

This is only for people comfortable with a terminal. You need [Node.js](https://nodejs.org/) installed. Then:

```bash
npm install
npm run docs:dev
```

Open the address it prints (usually `http://localhost:5173/Koalafied-Wiki/`). The page reloads as you save files.
