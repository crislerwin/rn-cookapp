import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Plate } from '../../components/Plate';
import { Toggle } from '../../components/Toggle';
import { Container } from './styles';

export const  Home: React.FC<{}> = () => {
  return(
    <Container>
      <Header />
      <Toggle />
     <Plate />
     <Footer />
    </Container>
  )
}


