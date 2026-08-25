import saludar from "./saludador";

const saludarButton = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");
const nombre = document.querySelector("#nombre");

saludarButton.addEventListener("click", () => {
  div.innerHTML = "<p>" + saludar(nombre.value) + "</p>";
});