import "../css/main.css";
import "./mode.js";
import request from "./request.js";
import { createCountryDetails, updateBorderNames } from "./updateUI.js";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  request(
    `https://restcountries.com/v3.1/alpha/${code}?fields=flags,name,nativeName,population,region,subregion,capital,currencies,languages,borders`,
  )
    .then((data) => {
      // API can return an array or a single object depending on the endpoint/response
      const country = Array.isArray(data) ? data[0] : data;

      if (country && country.flags) {
        createCountryDetails(country);

        if (country.borders && country.borders.length > 0) {
          request(
            `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}&fields=name,cca3`,
          )
            .then((bordersData) => {
              if (Array.isArray(bordersData)) {
                updateBorderNames(bordersData);
              }
            })
            .catch((err) => {
              console.error("Could not fetch border names:", err);
            });
        }
      } else {
        console.error("Country not found or missing flags data");
        // Optional: window.location.href = "./index.html";
      }
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  window.location.href = "./index.html";
}
