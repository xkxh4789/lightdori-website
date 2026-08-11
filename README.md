# LightDori website

Static landing + manual (EN / KR).

## Preview locally

Open `index.html`, or:

```bash
npx --yes serve .
```

## GitHub Pages

This folder is meant to be published as a GitHub Pages site (root of the Pages branch/repo).

1. Create a public repo (example name: `lightdori-website`).
2. Push this folder to `main`.
3. GitHub → **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
4. Site URL:
   - `https://YOUR_USER.github.io/lightdori-website/`
   - Or a custom domain later

`/.nojekyll` is included so GitHub does not run Jekyll on the files.

### If the repo name is not `YOUR_USER.github.io`

Relative links (`./manual.html`, `./assets/...`) already work under a project Pages path.

## Download buttons

Edit `downloads.js`:

```js
window.LIGHTDORI_DOWNLOADS = {
  windows: "https://…/LightDori-Setup.exe",
  mac: "https://…/LightDori.dmg",
};
```

Empty URL → that button goes to the beta section.

## Notes

- Contact: `xkxh4789@gmail.com`
- Pages: `index.html`, `manual.html`
- Images: `assets/`
- Beta form uses mailto (no backend)
