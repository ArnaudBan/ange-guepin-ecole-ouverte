const nightModeButton = document.getElementById("nightModeButton");
const nightModeDiv = document.documentElement;

// Dark Mode Handler => switch theme on button click.

const darkModeHandler = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.dataset.theme = "light";
    localStorage.setItem("darkMode", "0");
  } else {
    nightModeDiv.dataset.theme = "dark";
    localStorage.setItem("darkMode", "1");
  }
};

// Dark Moda State Handler => check if a 'darkMode' local store exist.
// If true, activate darkMode, else create a localStorage called 'darkMode'

const darkModeState = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.dataset.theme = "dark";
  } else {
    localStorage.setItem("darkMode", "0");
  }
};

nightModeButton.addEventListener("click", darkModeHandler);
nightModeDiv.addEventListener("load", darkModeState());
