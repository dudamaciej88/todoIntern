import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ children, onClick, disabled }) => {
  return <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
