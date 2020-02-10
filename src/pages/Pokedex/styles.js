import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Pokemons = styled.FlatList.attrs({
    numColumns: 2,
})`
    margin-top: 40px;
`;

export const PokemonBox = styled(RectButton)`
    height: 60px;
    width: 160px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 12px;
    background: #74d345;
    justify-content: center;
`;
export const PokemonName = styled.Text`
    margin-left: 10px;
    color: #fff;
`;
