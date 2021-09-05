import React from 'react';
import { Container, Icon, Info, Label, Value } from './styles';

export const Toggle: React.FC = () => {
  return (
    <Container>
      <Icon name='x' size={26} />
      <Info>
        <Label>Calories</Label>
        <Value>150</Value>
      </Info>
      <Info>
        <Label>Weight</Label>
        <Value>190g</Value>
      </Info>
    </Container>
  );
}