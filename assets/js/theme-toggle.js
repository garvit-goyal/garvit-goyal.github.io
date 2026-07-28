(function () {
  "use strict";

  var storageKey = "garvit-color-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateToggle(theme) {
    if (!toggle) return;
    var nextTheme = theme === "dark" ? "light" : "dark";
    var label = "Switch to " + nextTheme + " theme";
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
    var icon = toggle.querySelector(".theme-toggle__icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (persist) localStorage.setItem(storageKey, theme);
    updateToggle(theme);
  }

  setTheme(currentTheme(), false);

  if (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      setTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });

    toggle.addEventListener("keydown", function (event) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        setTheme(currentTheme() === "dark" ? "light" : "dark", true);
      }
    });
  }
})();
