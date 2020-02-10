import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';

import { Container, Pokemons, PokemonBox, PokemonName } from './styles';
import CardPokemon from '../../components/CardPokemon';

export default function Users() {
    const [pokemons, setPokemons] = React.useState([]);

    useEffect(() => {
        async function loadPokemons() {
            const response = await api.get(`/pokemon`);

            setPokemons(response.data.results);
        }
        loadPokemons();
    }, []);

    console.tron.log(pokemons);

    return (
        <Container>
            {pokemons.map(poke => (
                <Text>{poke.name}</Text>
            ))}
            <Pokemons
                data={pokemons}
                keyExtractor={pokemon => pokemon.url}
                renderItem={poke => (
                    <CardPokemon
                        pokeUrl={poke.item.url}
                        pokeName={poke.item.name}
                    />
                )}
            />
        </Container>
    );
}
