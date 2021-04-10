const btnTogle = document.querySelector("#togleIcon");
const subIcon = document.querySelector("#subIcon");
const togleText = document.querySelector("#togleText");

let darkMode = readTheme();
window.onload = togleDefault();

/* Cuando cambia el sistema */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", this.chageStateTheme);

/* Al hacer click cambiamos el tema */
btnTogle.addEventListener("click", toggle);

function chageStateTheme() {
  if (darkMode !== readTheme()) {
    toggle();
  }
}

function readTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function togleDefault() {
  if (darkMode) {
    subIcon.classList.remove("iconMove");
    togleText.textContent = "Dark Mode";
  } else {
    subIcon.classList.add("iconMove");
    togleText.textContent = "Light Mode";
  }
}

function toggle() {
  document.querySelector("html").classList.remove("theme-default");

  if (darkMode) {
    document.querySelector("html").classList.add("theme-light");
    document.querySelector("html").classList.remove("theme-dark");
  } else {
    document.querySelector("html").classList.remove("theme-light");
    document.querySelector("html").classList.add("theme-dark");
  }

  darkMode = !darkMode;
  togleDefault();
}
