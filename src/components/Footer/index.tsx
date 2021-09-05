import React from 'react';
import {Container, Label, Description, FooterContainer, Price} from './styles';
import { Button } from '../Button';

export const Footer: React.FC = () => {
  return(
    <Container>
      <Label>
        Detail
      </Label>
    <Description>
    Get 50% discount on the special and delicious sushi
        and stay connected for further discounts.
    </Description>
    <FooterContainer>
      <Price>$22</Price>
      <Button />
    </FooterContainer>
    </Container>
  )
}