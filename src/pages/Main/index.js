import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Title,
    Form,
    Image,
    Input,
    List,
    MenuButton,
    MenuButtonText,
} from './styles';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JSHunt',
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        itemsMenu: [
            { id: '00', name: 'Pokedex' },
            { id: '01', name: 'Moves' },
            { id: '02', name: 'Abilities' },
            { id: '03', name: 'Items' },
        ],
    };

    handleNavigate = itemMenu => {
        const { navigation } = this.props;

        const { id } = itemMenu;

        if (id === '00') {
            navigation.navigate('Pokedex', { itemMenu });
        }
    };

    render() {
        const { itemsMenu } = this.state;
        return (
            <Container>
                <Title>What Pokemon {'\n'}are you looking for?</Title>
                <Form>
                    <Image />
                    <Input placeholder="Search Pokémon" />
                </Form>
                <List
                    data={itemsMenu}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <MenuButton onPress={() => this.handleNavigate(item)}>
                            <MenuButtonText>{item.name}</MenuButtonText>
                        </MenuButton>
                    )}
                />
            </Container>
        );
    }
}
