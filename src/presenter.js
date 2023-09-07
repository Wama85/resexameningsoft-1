import sumar from "./validar";

const texto = document.querySelector("#texto");
const ejecutar= document.querySelector("#ejecutar");
const resultado = document.querySelector("#resultado-div");

ejecutar.addEventListener("click", (event) => {
  event.preventDefault();

  const cadena = texto.value;
  

  resultado.innerHTML = `${cadena}`;
});
