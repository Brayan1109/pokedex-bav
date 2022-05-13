import { Route, Routes } from "react-router-dom";
import "./App.css";
import Encounters from "./pages/Encounters";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PokemonId from "./pages/PokemonId";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route>
        <Route path="/pokedex" element={<Home />} />
        <Route path="/pokedex/:id" element={<PokemonId />} />
        <Route path="/pokemon/:id/encounters" element={<Encounters />} />
      </Route>
    </Routes>
  );
}

export default App;
