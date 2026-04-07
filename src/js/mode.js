const darkModeBtn = document.querySelector(".header__dark-mode");
const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFromLocal) {
  document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeFromLocal
    ? localStorage.removeItem("mode")
    : localStorage.setItem("mode", "dark");
});
