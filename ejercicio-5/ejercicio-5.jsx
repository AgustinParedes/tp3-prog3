const { useState } = React;

function App() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState("Resultado: ");

  const botonDeshabilitado = operacion === "division" && parseFloat(numero2) === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    let res = 0;

    if (operacion === "suma") {
      res = num1 + num2;
    } else if (operacion === "resta") {
      res = num1 - num2;
    } else if (operacion === "multiplicacion") {
      res = num1 * num2;
    } else if (operacion === "division") {
      res = num1 / num2;
    }
    setResultado(`Resultado: ${res}`);
  };

  return (
    <div>
      <h1>Ejercicio 4</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Ingrese número:
            <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            Ingrese número:
            <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            Seleccione una operación:
            <select name="" id="" value={operacion} onChange={(e) => setOperacion(e.target.value)}>
              <option value="suma">Suma</option>
              <option value="resta">Resta</option>
              <option value="multiplicacion">Multiplicación</option>
              <option value="division">División</option>
            </select>
          </label>
        </div>

        <button type="submit" disabled={botonDeshabilitado}>
          Calcular operación
        </button>

        <p>{resultado}</p>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
