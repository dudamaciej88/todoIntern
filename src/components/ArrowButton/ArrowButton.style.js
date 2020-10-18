import styled from 'styled-components';
import { ReactComponent as rightArrow } from '../../assets/rightArrow.svg';
import { ReactComponent as upArrow } from '../../assets/upArrow.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:disabled {
    opacity: 0.5;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ArrowRight = styled(rightArrow)`
  width: 1rem;
  height: 1rem;
`;

export const ArrowLeft = styled(rightArrow)`
  width: 1rem;
  height: 1rem;
  transform: rotate(180deg);
`;

export const ArrowUp = styled(upArrow)`
  width: 1rem;
  height: 1rem;
  fill: ${(props) => props.$active ? 'white' : '#707070'};
`;

export const ArrowDown = styled(upArrow)`
  width: 1rem;
  height: 1rem;
  transform: rotate(180deg);
  fill: ${(props) => props.$active ? 'white' : '#707070'};
`;
