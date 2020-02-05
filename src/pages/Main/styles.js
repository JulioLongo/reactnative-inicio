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

export const MenuButton = styled(RectButton)`
    height: 60px;
    width: 160px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 12px;
    background: #74d345;
    justify-content: center;
`;
export const MenuButtonText = styled.Text`
    margin-left: 10px;
    color: #fff;
`;
