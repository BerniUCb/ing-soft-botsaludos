import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar a un hombre con bienvenido", () => {
    expect(saludar("Berni", 9, "M")).toEqual("Buenos días Berni, bienvenido");
  });

  it("deberia saludar a una mujer con bienvenida", () => {
    expect(saludar("Ana", 15, "F")).toEqual("Buenas tardes Ana, bienvenida");
  });

  it("deberia saludar buenas noches en la noche", () => {
    expect(saludar("Berni", 22, "M")).toEqual("Buenas noches Berni, bienvenido");
  });
});