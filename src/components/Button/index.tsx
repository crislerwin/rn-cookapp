import React from 'react';
import { Btn, Text, Icon } from './styles';

export const Button: React.FC<{}> = () => {
  return (
    <Btn>
      <Text>Add to cart</Text>
      <Icon name="shopping-cart" size={24}/>
    </Btn>
  )
};
