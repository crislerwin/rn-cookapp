import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const TitleContainer = styled.View``;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.brown};
  font-size: 28px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.orange};
  font-size: 20px;
  align-self: flex-end;
  font-weight: 500;
`;

const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.white};
`;

export {Container, Title, SubTitle, Icon, TitleContainer};
