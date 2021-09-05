import React from 'react';
import { Btn, Text } from './styles';
import Feather from 'react-native-vector-icons/Feather';
export const Button: React.FC<{}> = () => {
  return (
    <Btn>
      <Text>Add to cart</Text>
      <Feather name="shopping-cart" size={24} color="#fff" />
    </Btn>
  )
};
