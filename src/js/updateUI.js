const cards = document.querySelector(".cards");

export const createCountries = (countries) => {
  cards.innerHTML = "";
  countries.forEach((country) => {
    const flags = country.flags;
    const name = country.name.common;
    const population = country.population.toLocaleString();
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No capital";

    // li
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
      <a href="./about.html?code=${country.cca3}">
        <img
          src="${flags.png}"
          alt="${flags.alt}"
          width="267"
          height="160"
        />
        <div class="cards__item-inner">
          <h3 class="cards__title">${name}</h3>
          <p class="population">
            Population: <span>${population}</span>
          </p>
          <p class="region">
            Region: <span>${region}</span>
          </p>
          <p class="capital">
            Capital: <span>${capital}</span>
          </p>
        </div>
      </a>
    `;

    cards.appendChild(li);
  });
};

export const createCountryDetails = (country) => {
  const flags = country.flags;
  const name = country.name.common;
  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "No native name";
  const population = country.population.toLocaleString();
  const region = country.region;
  const subregion = country.subregion ? country.subregion : "No subregion";
  const capital = country.capital ? country.capital[0] : "No capital";
  const currencies = country.currencies
    ? Object.values(country.currencies)[0].name
    : "No currencies";
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages";
  const borders = country.borders ? country.borders : "No borders";

  const countryInfo = document.querySelector(".country-info");
  countryInfo.innerHTML = `
    <img
      class="country-info__img"
      src="${flags.png}"
      alt="${flags.alt}"
      width="560"
      height="400"
    />
    <div class="country-info__content">
      <h2>${name}</h2>
      <ul class="country-info__list">
        <li class="country-info__item">
          <p class="name">
            Native Name:
            <span>${nativeName}</span>
          </p>
          <p class="population">
            Population:
            <span>${population}</span>
          </p>
          <p class="region">
            Region:
            <span>${region}</span>
          </p>
          <p class="sub-region">
            Sub Region:
            <span>${subregion}</span>
          </p>
          <p class="capital">
            Capital:
            <span>${capital}</span>
          </p>
        </li>
        <li class="country-info__item">
          <p class="population">
            Currencies:
            <span>${currencies}</span>
          </p>
          <p class="region">
            Languages:
            <span>${languages}</span>
          </p>
        </li>
      </ul>

      <div class="country-info__borders">
        <h3>Border Countries:</h3>
        <div class="border-list">
          ${
            Array.isArray(borders)
              ? borders
                  .map(
                    (border) =>
                      `<a href="./about.html?code=${border}" class="border">${border}</a>`,
                  )
                  .join("")
              : `<span>${borders}</span>`
          }
        </div>
      </div>
    </div>`;
};

// Function to update border names once they are fetched
export const updateBorderNames = (bordersData) => {
  const borderList = document.querySelector(".border-list");
  if (!borderList) return;

  borderList.innerHTML = bordersData
    .map(
      (border) =>
        `<a href="./about.html?code=${border.cca3}" class="border">${border.name.common}</a>`,
    )
    .join("");
};
