import React from 'react';
import { Header } from '../../components/Header';
import { Plate } from '../../components/Plate';
import { Toggle } from '../../components/Plate/Toggle';
import { Container } from './styles';

export const  Home: React.FC<{}> = () => {
  return(
    <Container>
      <Header />
      <Toggle />
     <Plate />
    </Container>
  )
}


