import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  border: 2px solid #70707054;
`;

export const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #494430;
  padding: 0 1rem;
`;

export const HeadNSort = styled.div`
flex-grow: ${(props) => props.grow};
display: flex;
justify-content: flex-start;
align-items: center;
`

export const P = styled.p`
  color: white;
`;


