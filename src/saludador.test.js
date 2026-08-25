import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar en español sin tratamiento a un menor de 30", () => {
    expect(saludar("Berni", 9, "M", 20, "es")).toEqual("Buenos días Berni, bienvenido");
  });

  it("deberia saludar en español con Sr a un hombre mayor de 30", () => {
    expect(saludar("Juan", 9, "M", 45, "es")).toEqual("Buenos días Sr. Juan, bienvenido");
  });

  it("deberia saludar en español con Sra a una mujer mayor de 30", () => {
    expect(saludar("Ana", 15, "F", 50, "es")).toEqual("Buenas tardes Sra. Ana, bienvenida");
  });
});