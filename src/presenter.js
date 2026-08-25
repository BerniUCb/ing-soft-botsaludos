import saludar from "./saludador";

const saludarButton = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");
const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");

saludarButton.addEventListener("click", () => {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  const edadNumero = Number.parseInt(edad.value);

  div.innerHTML = "<p>" + saludar(nombre.value, horaActual, genero.value, edadNumero) + "</p>";
});