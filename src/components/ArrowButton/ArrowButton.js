import React from 'react';
import {
  Button,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
} from './ArrowButton.style';

const ArrowButton = ({ direction, onClick, disabled, active }) => {
  const setArrow = (direction) => {
    switch (direction) {
      case 'up':
        return <ArrowUp $active={active} />;
      case 'down':
        return <ArrowDown $active={active} />;
      case 'left':
        return <ArrowLeft />;
      case 'right':
        return <ArrowRight />;
      default:
        return <ArrowUp $active={active} />;
    }
  };

  return (
    <Button onClick={onClick} disabled={disabled}>
      {setArrow(direction)}
    </Button>
  );
};

export default ArrowButton;
