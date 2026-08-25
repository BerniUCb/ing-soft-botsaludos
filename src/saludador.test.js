import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar en español con Sr a un hombre mayor de 30", () => {
    expect(saludar("Juan", 9, "M", 45, "es")).toEqual("Buenos días Sr. Juan, bienvenido");
  });

  it("deberia saludar en español con Sra a una mujer mayor de 30", () => {
    expect(saludar("Ana", 15, "F", 50, "es")).toEqual("Buenas tardes Sra. Ana, bienvenida");
  });

  it("deberia saludar en ingles a un menor de 30", () => {
    expect(saludar("Berni", 9, "M", 20, "en")).toEqual("Good morning Berni, welcome");
  });

  it("deberia saludar en ingles con Mr a un hombre mayor de 30", () => {
    expect(saludar("John", 15, "M", 45, "en")).toEqual("Good afternoon Mr. John, welcome");
  });

  it("deberia saludar en ingles con Mrs a una mujer mayor de 30", () => {
    expect(saludar("Mary", 22, "F", 60, "en")).toEqual("Good evening Mrs. Mary, welcome");
  });
  it("deberia saludar a visitante si no se pone nombre", () => {
  expect(saludar("", 9, "M", 20, "es")).toEqual("Buenos días visitante, bienvenido");
  });
});