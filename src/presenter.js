import saludar from "./saludador";

const saludarButton = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");

saludarButton.addEventListener("click", () => {
  div.innerHTML = "<p>" + saludar() + "</p>";
});