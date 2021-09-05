import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  height: 50px;
  width: 200px;
  border-radius: 50px;
  padding-horizontal: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
`;

export {Btn, Text};
