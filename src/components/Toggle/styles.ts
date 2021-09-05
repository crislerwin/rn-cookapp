import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
const Container = styled.View`
position: absolute;
z-index: 1;
top: 150px;
left: 24px;
width: 70px;
height: 170px;
overflow: hidden;
background-color: ${({theme}	)=> theme.colors.red};
border-bottom-end-radius: 30px;
border-bottom-start-radius: 30px;
border-top-end-radius: 30px;
align-items: center;
padding-vertical: 24px;
`;

const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
`;

const Info = styled.View`
margin-top: 17px;
`;

const Label = styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 14px;

`;

const Value = styled.Text`
color: ${({ theme }) => theme.colors.white};
font-size: 15px;
font-weight: 600;
`;


export { Container, Icon, Info, Label, Value };

