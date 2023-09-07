import contartexto from "./validar.js";

describe("COMPARAR LAS PALABRAS", () => {
  it("deberia mostrar la cantidad de palabras", () => {
    const palabra = "Hola MUNDO";
    expect(contartexto(palabra)).toEqual(2);
  });
});
