const lista = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const formulario = document.getElementById("formulario");
const filtro = document.getElementById("filtro");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = filtro.value.trim().toLowerCase();

  resultado.innerHTML = "";
  mensaje.textContent = "";

  if (texto == "") {
    alert("Error: Debe ingresar un texto para filtrar.");
    return;
  }

  const comparacion = lista.filter(function (palabra) {
    return palabra.toLowerCase().includes(texto);
  });

  if (comparacion.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias.";
  } else {
    comparacion.forEach(function (palabra) {
      const lis = document.createElement("li");
      lis.textContent = palabra;
      resultado.appendChild(lis);
    });
  }
});
