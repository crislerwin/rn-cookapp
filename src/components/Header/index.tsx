import React from 'react';
import {Container, Title, SubTitle, Icon, TitleContainer} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Icon name="arrow-left" size={32} />
      <TitleContainer>
        <Title>Oriental Food</Title>
        <SubTitle> Special Sushi </SubTitle>
      </TitleContainer>
    </Container>
  );
};
