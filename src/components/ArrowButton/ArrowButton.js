import React from 'react';
import {
  Button,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
} from './ArrowButton.style';

const ArrowButton = ({ direction, onClick, disabled }) => {
  const setArrow = (direction) => {
    switch (direction) {
      case 'up':
        return <ArrowUp />;
      case 'down':
        return <ArrowDown />;
      case 'left':
        return <ArrowLeft />;
      case 'right':
        return <ArrowRight />;
      default:
        return <ArrowUp />;
    }
  };

  return (
    <Button onClick={onClick} disabled={disabled}>
      {setArrow(direction)}
    </Button>
  );
};

export default ArrowButton;
