const formulario = document.getElementById("formulario");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const selector = document.getElementById("selector");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = parseFloat(numero1.value);
  const num2 = parseFloat(numero2.value);
  const select = selector.value;
  let res = 0;
  if (select == "suma") {
    res = num1 + num2;
  } else if (select == "resta") {
    res = num1 - num2;
  } else if (select == "multiplicacion") {
    res = num1 * num2;
  } else if (select == "division") {
    if (num2 === 0) {
      boton.disabled = true;
      alert("No se pude dividir en 0");
      return;
    } else {
      boton.disabled = false;
      res = num1 / num2;
    }
  }
  resultado.textContent = "Resultado: " + res;
});
