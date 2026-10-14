/* Firefox Custom Theme profile preferences. */

// Enable customChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Enable CSD
user_pref("browser.tabs.drawInTitlebar", true);

// Set UI density to normal
user_pref("browser.uidensity", 0);

// Enable Firefox's native New Tab wallpaper library. Selection remains a
// normal profile preference, so the theme does not force a default image.
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.enabled", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.library.enabled", true);

