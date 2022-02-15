const headerElements = document.querySelectorAll("header");
const mainSectionElements = document.querySelectorAll(".main-section");
const navElement = document.getElementById("list-link");

mainSectionElements.forEach((section) => {
  const headerText = section.firstElementChild.innerHTML;
  const idText = headerText.replace(/ /g, "_");
  section.setAttribute("id", idText);

  const linkElement = document.createElement("a");
  linkElement.classList.add("nav-link");
  linkElement.innerText = headerText;
  linkElement.setAttribute("href", `#${idText}`);

  navElement.appendChild(linkElement);
});
