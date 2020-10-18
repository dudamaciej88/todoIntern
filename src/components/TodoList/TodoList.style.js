import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //na malej rozdzielczosci dac 80%
  max-width: 800px;
  margin: 100px auto;
  border: 2px solid #70707054;
`;

export const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #494430;
  padding: 0 1rem;
`;

export const P = styled.p`
  flex-grow: ${(props) => props.grow};
  color: white;
`;

export const P2 = styled(P)`
  width: 80px;
`;
