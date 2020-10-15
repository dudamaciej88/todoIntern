import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #e1e1e1;
  border-top: none;
`;

export const P = styled.p`
  flex-grow: ${(props) => props.grow};
  width: 80px;
  color: #707070;
`;

export const DoneAndTrashWrapper = styled.div`
  flex-grow: ${(props) => props.grow};
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
