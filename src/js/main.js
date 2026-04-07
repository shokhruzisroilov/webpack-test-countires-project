import "../css/main.css";
import request from "./request.js";
import { createCountries } from "./updateUI.js";
import { initFilter } from "./filter.js";
import "./mode.js";

request(
  "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3",
)
  .then((data) => {
    createCountries(data);
    initFilter(data);
  })
  .catch((err) => {
    console.error(err);
  });
