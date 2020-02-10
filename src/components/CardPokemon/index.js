import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function CardPokemon({ pokeName, pokeUrl }) {
    // console.tron.log();
    return (
        <View>
            <Text>{pokeUrl}</Text>
            <Text>{pokeName}</Text>
        </View>
    );
}
