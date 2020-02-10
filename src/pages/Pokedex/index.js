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
            console.tron.log(response.data.results);

            setPokemons(response.data.results);
            console.tron.log(pokemons);
        }
        loadPokemons();
    }, []);

    return (
        <Container>
            <Pokemons
                data={pokemons}
                keyExtractor={user => user.url}
                renderItem={({ item }) => <CardPokemon url={item.url} />}
            />
        </Container>
    );
}
