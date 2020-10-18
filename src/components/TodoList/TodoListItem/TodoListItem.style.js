import styled from 'styled-components';
import { ReactComponent as Trash } from '../../../assets/trashIcon.svg';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-top: none;
  &:hover > div > button {
    visibility: visible;
  }
`;

export const P = styled.p`
  flex-grow: ${(props) => props.grow};
  min-width: 100px;
  color: #707070;
  overflow: hidden;
`;

export const DoneAndTrashWrapper = styled.div`
  flex-grow: ${(props) => props.grow};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    @media (min-width: 768px) {
      visibility: hidden;
    }

    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

export const TrashIcon = styled(Trash)`
  width: 1rem;
  height: 1rem;
  color: #707070;
`;
