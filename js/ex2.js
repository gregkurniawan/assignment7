const list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countries = document.querySelector("input");
const selection = document.getElementById("suggestions");

const createSelection = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;
  element.addEventListener("click", e => {
    countries.value = e.target.textContent;
    selection.innerHTML = "";
  });
  return element;
};

countries.addEventListener("input", () => {
  selection.innerHTML = "";
  list.forEach(country => {
    if (country.startsWith(countries.value)) {
      selection.appendChild(createSelection(country));
    }
  });
});