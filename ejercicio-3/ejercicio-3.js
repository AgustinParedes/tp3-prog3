console.log("Hola Mundo");

const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tareas = await res.json();

  const completo = tareas.filter(function (tareas) {
    return tareas.completed === true;
  });

  completo.forEach(function (tareas) {
    const item = document.createElement("li");
    item.textContent = tareas.title;
    lista.appendChild(item);
  });
});
