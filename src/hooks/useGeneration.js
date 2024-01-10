import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchPokemonData, fetchPokemons } from '../api';
import generations from '../data/generations';

const useGeneration = (generationId) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generation = useMemo(() => {
    return generations.find((gen) => gen.id === generationId);
  }, [generationId]);

  // Fetch pokemons data by generation.
  const fetchData = useCallback(() => {
    if (generation && generation.limit !== null && generation.offset !== null) {
      setIsLoading(true);
      setPokemons([]);

      // Get all Pokemons for the selected generation.
      fetchPokemons(generation.limit, generation.offset).then(async ({ results }) => {
        const data = [];

        // Get data for each specific Pokemon.
        await Promise.all(
          results.map(async ({ name }) => {
            const pokemon = await fetchPokemonData(name);

            data[pokemon.id] = pokemon;
          })
        );

        setPokemons(data);
        setIsLoading(false);
      });
    }
  }, [generation]);

  // Refetch on generation change.
  useEffect(() => {
    fetchData();
  }, [generationId, fetchData]);

  return {
    data: pokemons,
    refetch: fetchData,
    isLoading,
  };
};

export default useGeneration;