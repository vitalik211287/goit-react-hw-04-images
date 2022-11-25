import React from 'react';
import { Buttons } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, state }) => {
  return (
    <Buttons onClick={() => onClick()} type="button">
      Load more
    </Buttons>
  );
};
export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
