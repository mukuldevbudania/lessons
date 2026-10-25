/* theme.js — shared, dependency-free theme switching for the courses site.
 *
 * How it works:
 *  - Each course has a stable key (see COURSE_KEYS): derived from its folder name.
 *  - A chosen theme id is stored in localStorage under  "lessons.theme." + courseKey.
 *  - On every page load we detect which course the page belongs to (from its path),
 *    read the stored theme, and override the palette CSS custom properties on :root.
 *  - The root index page (window.lessonsThemePicker === true) renders swatch pickers
 *    that write the same localStorage keys, so a choice there applies to that course
 *    everywhere, immediately and on future visits. Static-host friendly (no build).
 */
(function () {
  "use strict";

  // Palette catalog. Each theme sets the core variables every course stylesheet reads.
  // Values are chosen to stay readable in the dark, true-black course UIs.
  var THEMES = {
    default:  { label: "Course default", accent: null }, // null => leave the stylesheet's own palette
    emerald:  { label: "Emerald",  accent: "#34d399", accent2: "#6ee7b7", panel: "#0a1612", soft: "#06130d", rule: "#11231a" },
    youtube:  { label: "YouTube red", accent: "#ff4e45", accent2: "#ff7a73", panel: "#140a0a", soft: "#1a0c0b", rule: "#2a1413" },
    indigo:   { label: "Indigo",   accent: "#7c8cff", accent2: "#a5b0ff", panel: "#0b0e1c", soft: "#0a1024", rule: "#171c33" },
    amber:    { label: "Amber",    accent: "#f5b53d", accent2: "#ffd27a", panel: "#171206", soft: "#1b1407", rule: "#2b2110" },
    cyan:     { label: "Cyan",     accent: "#3dd6e0", accent2: "#7ceaf1", panel: "#06161a", soft: "#06141a", rule: "#0f2730" },
    violet:   { label: "Violet",   accent: "#bd93f9", accent2: "#d6b8ff", panel: "#130c1c", soft: "#160e22", rule: "#241633" },
    rose:     { label: "Rose",     accent: "#ff6b9d", accent2: "#ff9ac0", panel: "#1a0a11", soft: "#1e0c14", rule: "#2c1420" }
  };

  // Folder name -> stable course key. Add new courses here.
  var COURSE_KEYS = {
    "github-for-creatives": "github",
    "ai-video-creation": "aivideo",
    "youtube-for-developers": "youtube"
  };

  function storageKey(courseKey) { return "lessons.theme." + courseKey; }

  function getStored(courseKey) {
    try { return localStorage.getItem(storageKey(courseKey)); } catch (e) { return null; }
  }
  function setStored(courseKey, themeId) {
    try { localStorage.setItem(storageKey(courseKey), themeId); } catch (e) {}
  }

  // Which course does the current page belong to? Derive from the path.
  function detectCourseKey() {
    var path = location.pathname;
    for (var folder in COURSE_KEYS) {
      if (Object.prototype.hasOwnProperty.call(COURSE_KEYS, folder)) {
        if (path.indexOf("/" + folder + "/") !== -1 || path.indexOf(folder + "/") !== -1) {
          return COURSE_KEYS[folder];
        }
      }
    }
    return null; // root index or unknown
  }

  // Apply a theme's variables to a root element (defaults to :root).
  function applyTheme(themeId, root) {
    root = root || document.documentElement;
    var t = THEMES[themeId];
    if (!t || !t.accent) {
      // default: clear any overrides we previously set
      ["--accent", "--accent-2", "--panel", "--accent-soft", "--rule"].forEach(function (v) {
        root.style.removeProperty(v);
      });
      return;
    }
    root.style.setProperty("--accent", t.accent);
    if (t.accent2) root.style.setProperty("--accent-2", t.accent2);
    if (t.panel)   root.style.setProperty("--panel", t.panel);
    if (t.soft)    root.style.setProperty("--accent-soft", t.soft);
    if (t.rule)    root.style.setProperty("--rule", t.rule);
  }

  // On load: if this is a course page, apply its stored theme.
  var courseKey = detectCourseKey();
  if (courseKey) {
    var stored = getStored(courseKey);
    if (stored) applyTheme(stored, document.documentElement);
  }

  // Expose a tiny API for the index picker.
  window.LessonsTheme = {
    THEMES: THEMES,
    COURSE_KEYS: COURSE_KEYS,
    get: getStored,
    set: setStored,
    apply: applyTheme
  };
})();
