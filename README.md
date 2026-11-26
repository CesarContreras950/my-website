# Cesar's Website

My personal website: a one-page bio with a photo, links to my Instagram and LinkedIn, and a short feedback box. It's plain HTML, CSS, and JavaScript with no frameworks or build step.

> Status (Nov 26, 2026): work in progress. The page opens, but some parts don't work yet. See [Known issues](#known-issues).

## What's on the page

- A heading and subheadings ("Cesar's Website", "This is my personal website", "This is a bio about me")
- A short bio in a rounded, shadowed card
- A photo (`IMG_2069.jpg`)
- Links to Instagram and LinkedIn
- A feedback box: a text area limited to 200 characters, a "0 / 200 characters" label, and a Submit button
- A background that slowly cycles through purple, cyan, and green over 15 seconds

## How to run it

There's nothing to install.

1. Download or clone this repo:
   ```bash
   git clone https://github.com/CesarContreras950/my-website.git
   cd my-website
   ```
2. Open `Cesar's-website.html` in any web browser (double-click it, or drag it into a browser window).

To see JavaScript messages and errors, open the browser's developer tools (right-click the page, choose **Inspect**, then the **Console** tab).

## Files

| File | What it does |
|---|---|
| `Cesar's-website.html` | The page itself: headings, bio, photo, links, feedback box |
| `Cesar's-website.css` | All the styling: the color-cycling background, fonts, the bio card, the button and text box |
| `Cesar's-website.js` | The page's behavior: logs "App started!" and is meant to handle the Submit button |
| `LICENSE` | MIT license |
| `CHANGELOG.md` | A record of the work done on this site and the music player |

A second script, `main.js`, exists in my local copy of the project but isn't in this repo and isn't loaded by the page. It's an earlier version of `Cesar's-website.js` with the same bugs.

## How it works

**Background.** The CSS `@keyframes changeColor` animation changes the page's `background-color` through five colors. `animation: changeColor 15s ease-out infinite` repeats it forever.

**Bio card.** The `<article>` gets rounded corners (`border-radius: 30px`), an aquamarine background, padding, and a purple drop shadow.

**Feedback box.** The `<textarea id="message">` has `maxlength="200"`, so the browser stops typing at 200 characters. The CSS gives it rounded corners and turns its border blue when it's clicked into (`#message:focus`).

**Submit button.** The button has the class `submit-Button`. The script is meant to find it, stop the page from reloading when it's clicked (`event.preventDefault()`), and log a message. Right now it doesn't (see below).

## Known issues

These are real problems found in a review on Nov 26, 2026. Fixes are in progress.

1. **The styling only loads on my own Mac.** The stylesheet link is a full path to a folder on my computer (`/Users/cesarcontreras/...`). Anywhere else, the page shows up unstyled. It should be `href="Cesar's-website.css"`.
2. **The script crashes, so the Submit button does nothing.** `main.js ()` should be `main()`. The selectors `.submit-btn` and `submit-button` don't match the button's real class, `submit-Button`.
3. **The character counter never updates.** "0 / 200 characters" is plain text; no code changes it as you type.
4. **Two CSS rules are broken.** The `h1` rule is missing a `;` and a `:`, so its font size is ignored. The `button` rule's margin/padding line is mangled, so the button gets no padding.
5. **The photo is missing.** `IMG_2069.jpg` isn't in the repo, so the image shows as broken.
6. **No `<meta charset>` or viewport tag,** so the page can look zoomed out on phones.
7. **Submit doesn't send feedback anywhere.** Even once the button works, it only logs to the console. Sending the message somewhere (email, a form service, or a server) isn't built yet.

## Ideas for next steps

- Fix the issues above, starting with 1 and 2 since they affect every visitor
- Publish the site for free with GitHub Pages (repo **Settings → Pages**)
- Rename the files to `index.html`, `style.css`, and `script.js`; apostrophes and spaces in file names cause trouble on web servers
- Replace the `<br>` tags with CSS margins for spacing
- Link to the music player project once it's online

## License

MIT. See [LICENSE](LICENSE).
