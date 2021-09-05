import styled from 'styled-components/native';


const Container = styled.View``;

const Label = styled.Text`
color: ${({ theme }) => theme.colors.brown};
font-size: 17px;
`;


const Description = styled.Text`
color: ${({ theme})=> theme.colors.gray};
font-size: 14px;
line-height: 18px;
margin-vertical: 15px;

`;


const FooterContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;


const Price = styled.Text`
color: ${({theme}) => theme.colors.brown};
font-size: 34px;
`;

export {Container, Label, Description, FooterContainer, Price};