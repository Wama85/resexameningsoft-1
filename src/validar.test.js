import contartexto from "./validar.js";

describe("COMPARAR LAS PALABRAS", () => {
  it("Cadena sin palabas no tiene ningua ocurrencia", () => {
    const palabra="";
    expect(contartexto(palabra)).toEqual({ });
  });
  it("cadena con una palabra tiene una ocurrencia", () => {
    const palabra = "el password";
    expect(contartexto(palabra)).toEqual({el:1,password:1});
  });
  it("cadena con las misma palabras dos veces", () => {
    const palabra = "computadora computadora";
    expect(contartexto(palabra)).toEqual({computadora:2});
  });
});
