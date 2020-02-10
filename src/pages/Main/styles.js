import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin-top: 16px;
`;

export const Form = styled.View`
    flex-direction: row;
    margin-top: 40px;
    border-radius: 24px;
    background: #eee;
`;

export const Image = styled.Image``;

export const Input = styled.TextInput`
    margin-left: 14px;
`;

export const List = styled.FlatList.attrs({
    numColumns: 2,
})`
    margin-top: 40px;
`;

export const Menus = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 32px;
`;

export const MenuButton = styled(RectButton)`
    height: 60px;
    width: 49%;
    margin-bottom: 8px;
    border-radius: 12px;
    background: #74d345;
    justify-content: center;
`;
export const MenuButtonText = styled.Text`
    margin-left: 10px;
    color: #fff;
`;
