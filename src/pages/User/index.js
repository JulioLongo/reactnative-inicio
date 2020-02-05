import React, { Component } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';

import { Container, Pokemons, PokemonBox, PokemonName } from './styles';

export default class Users extends Component {
    state = {
        pokemons: [],
    };

    async componentDidMount() {
        const response = await api.get(`/pokemon`);

        console.tron.log(response.data.results);

        this.setState({
            pokemons: response.data.results,
        });

        console.tron.log(this.state.pokemons);
    }

    render() {
        const { pokemons } = this.state;

        return (
            <Container>
                <Text>dddde</Text>
                <Pokemons
                    data={pokemons}
                    keyExtractor={user => user.url}
                    renderItem={({ item }) => (
                        <PokemonBox>
                            <PokemonName>{item.name}</PokemonName>
                        </PokemonBox>
                    )}
                />
            </Container>
        );
    }
}
