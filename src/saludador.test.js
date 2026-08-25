import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con hola y el nombre", () => {
    expect(saludar("Berni")).toEqual("Hola Berni");
  });
});