const { useState } = React;

function App() {
  const [izquierdo, setIzquierdo] = useState(true);
  const [derecho, setDerecho] = useState(false);

  const handleClickIzquierdo = () => {
    setIzquierdo(false);
    setDerecho(true);
  };

  const handleClickDerecho = () => {
    setDerecho(false);
    setIzquierdo(true);
  };

  return (
    <div>
      <button onClick={handleClickIzquierdo} disabled={!izquierdo}>
        Botón Izquierdo
      </button>

      <button onClick={handleClickDerecho} disabled={!derecho}>
        Botón Derecho
      </button>
    </div>
  );
}

const contenedor = document.getElementById("root");
const root = ReactDOM.createRoot(contenedor);
root.render(<App />);
