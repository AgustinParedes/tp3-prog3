const { useState } = React;

function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    const estatura = altura / 100;
    const imc = peso / (estatura * estatura);
    setResultado(imc);
  };

  const respuestaIMC = () => {
    if (!resultado) return null;

    if (resultado < 18.5) {
      return { respuesta: "Nivel bajo", color: "yellow" };
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      return { respuesta: "Nivel normal", color: "green" };
    } else if (resultado >= 24 && resultado <= 29.9) {
      return { respuesta: "Sobrepeso", color: "orange" };
    } else {
      return { respuesta: "Obesidad", color: "red" };
    }
  };

  const respuesta = respuestaIMC();

  return (
    <div>
      <h1>Ejercicio 6</h1>
      <form action="" onSubmit={calcularIMC}>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} required />
        </div>

        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(parseFloat(e.target.value))} required />
        </div>

        <button type="submit">Calcular IMC</button>
      </form>

      {resultado && (
        <div>
          <p>Tu Índice de Masa Corporal es: {resultado.toFixed(2)}</p>
          {respuesta && <p style={{ backgroundColor: respuesta.color, padding: "10px" }}>{respuesta.respuesta}</p>}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
