const loaderEl = document.querySelector(".loader");

const toggleLoader = (show) => {
  if (show) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};

export default toggleLoader;
