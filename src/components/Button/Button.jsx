import React from 'react';
import { Buttons } from './Button.styled';

const Button = ({ onClick, state }) => {
  return (
    <Buttons onClick={() => onClick()} type="button">
      Load more
    </Buttons>
  );
};
export default Button;
