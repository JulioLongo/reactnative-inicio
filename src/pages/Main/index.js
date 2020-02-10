import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Title,
    Form,
    Image,
    Input,
    Menus,
    MenuButton,
    MenuButtonText,
} from './styles';

export default function Main({ navigation }) {
    function handleNavigate(testee) {
        const { teste } = testee;
        console.tron.log(teste);
        navigation.navigate('Pokedex');
    }

    return (
        <Container>
            <Title>What Pokemon {'\n'}are you looking for?</Title>
            <Form>
                <Image />
                <Input placeholder="Search Pokémon" />
            </Form>

            <Menus>
                <MenuButton onPress={() => handleNavigate("teste: '1'")}>
                    <MenuButtonText>Pokedex</MenuButtonText>
                </MenuButton>
                <MenuButton>
                    <MenuButtonText>Moves</MenuButtonText>
                </MenuButton>
                <MenuButton>
                    <MenuButtonText>Abilities</MenuButtonText>
                </MenuButton>
                <MenuButton>
                    <MenuButtonText>Items</MenuButtonText>
                </MenuButton>
            </Menus>
        </Container>
    );
}
