import { createCountries } from "./updateUI.js";

const searchFormElement = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const selectList = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

let allCountries = [];
let currentRegion = "All";

export const initFilter = (countries) => {
  allCountries = countries;
};

const applyFilters = () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = allCountries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchValue);
    const matchesRegion =
      currentRegion === "All" || country.region === currentRegion;
    return matchesSearch && matchesRegion;
  });

  createCountries(filtered);
};

searchFormElement.addEventListener("input", (event) => {
  applyFilters();
});

selectList.forEach((li) => {
  li.addEventListener("click", () => {
    currentRegion = li.textContent;
    searchSelectSpan.textContent = currentRegion;
    applyFilters();
  });
});
