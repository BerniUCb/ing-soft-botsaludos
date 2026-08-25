import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con buenos dias en la manana ", () => {
    expect(saludar("Berni", 8)).toEqual("Buenos días Berni");
  });
  it("deberia saludar con buenas tardes en la tarde ", () => {
    expect(saludar("Berni", 15)).toEqual("Buenas tardes Berni");
  });
  it("deberia saludar con buenas noches en la noche ", () => {
    expect(saludar("Berni", 22)).toEqual("Buenas noches Berni");
  });
});