import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar sin tratamiento a un menor de 30", () => {
    expect(saludar("Berni", 9, "M", 20)).toEqual("Buenos días Berni, bienvenido");
  });

  it("deberia saludar con Sr a un hombre mayor de 30", () => {
    expect(saludar("Juan", 9, "M", 45)).toEqual("Buenos días Sr. Juan, bienvenido");
  });

  it("deberia saludar con Sra a una mujer mayor de 30", () => {
    expect(saludar("Ana", 15, "F", 50)).toEqual("Buenas tardes Sra. Ana, bienvenida");
  });
});