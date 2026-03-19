import { useState, useEffect } from "react";
import axios from "axios";
import { Search, Zap, Shield, Heart, Sword } from "lucide-react";
import "./App.css";

export default function App() {
  const [pokemonLista, setPokemonLista] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      // 1. Buscamos a lista básica (nome e url)
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      
      // 2. Para cada item, precisamos "entrar" na URL dele para pegar a foto e os tipos
      const dadosCompletos = await Promise.all(
        res.data.results.map(async (poke) => {
          const detalhe = await axios.get(poke.url);
          return detalhe.data;
        })
      );

      setPokemonLista(dadosCompletos);
      setLoading(false);
    } catch (err) {
      console.error("Erro ao carregar Pokémons");
    }
  };

  // Filtro de busca
  const pokemonFiltrados = pokemonLista.filter((poke) =>
    poke.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pokedex-app">
      <header>
        <h1>Pokédex Pro</h1>
        <div className="search-container">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Buscar Pokémon..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </header>

      {loading ? (
        <div className="loader">Carregando... 🔴</div>
      ) : (
        <div className="poke-grid">
          {pokemonFiltrados.map((poke) => (
            <div className={`poke-card ${poke.types[0].type.name}`} key={poke.id}>
              <span className="poke-id">#{poke.id.toString().padStart(3, '0')}</span>
              <img src={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
              <h2>{poke.name}</h2>
              <div className="types">
                {poke.types.map(t => (
                  <span key={t.type.name} className="type-badge">{t.type.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}