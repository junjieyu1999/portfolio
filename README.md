# Portfolio

A read-only, hardcoded portfolio site. No database, no build step, no dependencies. It is three files (`index.html`, `styles.css`, `script.js`) that GitHub Pages can serve as they are.

## How it works

- **Content** lives in one place: the `SITE` object at the top of `script.js`.
- **Pages** are drawn in the browser using hash routes (`#/about`, `#/work/fieldnotes`). Hash routes mean GitHub Pages never needs to find a separate file for each page, so links and refreshes always work.
- **The sidebar** lists your sections and projects. Clicking a project opens its full case study in the main area, and the project expands in the sidebar to show its summary.
- **Cover artwork** is drawn from code (layered earth with a low sun), one palette per project, so you do not need image files.

## Put it on GitHub Pages

1. Create a new repository on GitHub. For a site at `https://your-username.github.io`, name it exactly `your-username.github.io`. Any other name works too and gives you `https://your-username.github.io/repo-name/`.
2. Upload the files in this folder to the root of the repository. Either drag them into the GitHub web page ("Add file", then "Upload files"), or from a terminal in this folder:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

3. In the repository, open **Settings, then Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, and save.
4. Wait a minute or two. GitHub shows the live address at the top of the Pages settings.

## Make it yours

Open `script.js` and edit the `SITE` object:

| To change | Edit |
| --- | --- |
| Name, job title, headline, intro | `name`, `role`, `tagline`, `intro` |
| About page text and skills | `about`, `skills` |
| Work history | `experience` |
| Email and social links | `contact` |
| A project | an entry in `projects` |
| Colours of a project cover | `palette` on the project (`moss`, `ochre`, `clay`, `river`, `bark`) |

To add a project, copy an existing entry in `projects` and change the fields. The `slug` becomes the web address (`#/work/your-slug`), so use lowercase letters and hyphens. Leave `live` or `repo` as an empty string `''` to hide that button. New projects appear in the sidebar and on the home page automatically.

The content is prefilled from a resume. Add a `live` or `repo` link to a project to show its buttons, and expand the project stories as you see fit.

To change the colours of the whole site, edit the variables at the top of `styles.css` (`--peat` for the sidebar, `--lichen` for the page, `--ochre` for accents).

## Preview locally

Open `index.html` in a browser, or run a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Good to know

- Because pages are drawn by JavaScript, search engines see less than they would on plain HTML. If search ranking matters later, the content can be pre-rendered into static HTML pages.
- The fonts (Familjen Grotesk and Source Serif 4) load from Google Fonts. If they cannot load, the site falls back to system fonts and still works.
