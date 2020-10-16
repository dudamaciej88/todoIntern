import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 100%;
  z-index: 100;
  background-color: white;
  & h2 {
    width: 100%;
    max-width: 100%;
    background-color: #494430;
    color: white;
    padding: 1rem 0rem;
    margin: 0 0;
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    min-width: 50%;
    border: 1px solid #e1e1e1;
    & label {
      padding: 0.5rem 1rem;
    }
    & input {
      padding: 0.5rem 1rem;
      margin: 0rem 1rem;
    }
    & select {
      padding: 0.5rem 0.5rem;
      margin: 0rem 1rem;
    }
  }
`;

export const BtnsWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem 1rem;
`;
