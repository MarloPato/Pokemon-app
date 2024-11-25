import { useState } from "react";
import "./App.css";
import PokemonApplication from "./components/PokemonApplication";

function App() {
  let [showPokemonApp, setShowPokemonApp] = useState(false);

  return (
    <>
      <h1>Pokemon App</h1>
      <div>
        <button onClick={() => setShowPokemonApp(!showPokemonApp)}>
          {showPokemonApp ? "Close Pokemon App" : "Start Pokemon App"}
        </button>
      </div>

      {showPokemonApp && <PokemonApplication />}
    </>
  );
}

export default App;
