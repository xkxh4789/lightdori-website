/**
 * LightDori download links
 * --------------------------
 * Use the FILE download URL from GitHub Releases (right-click the .exe → Copy link).
 *
 * Correct example:
 *   https://github.com/YOUR_NAME/LightDori/releases/download/v0.1.0/LightDori-Setup.exe
 *
 * Wrong (will not download):
 *   sha256:2961a5e9...   ← checksum, not a link
 *   https://github.com/.../releases/tag/v0.1.0  ← release page, not the file
 *
 * Leave empty ("") to send visitors to the beta form instead.
 */
window.LIGHTDORI_DOWNLOADS = {
  // Paste the Windows .exe download URL here (must start with https://)
  windows: "https://github.com/xkxh4789/Lightdori-release/releases/download/Latest/LightDori_Setup_1.0.0_win64.exe",
  // Paste the macOS .dmg / .zip download URL here
  mac: "https://github.com/xkxh4789/Lightdori-release/releases/download/v0.1.0/LightDori_Setup_1.0.0.dmg",
  note: "",
};
