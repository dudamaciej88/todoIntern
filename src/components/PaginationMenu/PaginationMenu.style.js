import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem;
  border: 1px solid #e1e1e1;
  border-top: none;
  color: #707070;
`;

export const Select = styled.select`
margin: 0rem 0.5rem;
border: none;
background-color: white;
color: #707070;
&:focus {
  outline: none;
}
`;
