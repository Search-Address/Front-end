import styled from 'styled-components';

export const Wrraper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  width: 22rem;
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #3b3b3b;
  border-radius: 0.25rem;
  box-shadow: 0.5rem 0.5rem #222222;
  padding: 0.5rem;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  p {
    padding-top: 1rem;
  }
`;

export const WrraperInput = styled.div`
  height: 3rem;
  width: 18.125rem;
  border-radius: 0.25rem;
  display: flex;
  margin-top: 1rem;
  background: #121212;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 13rem;
    height: 1.5rem;
    border: 0;
    margin-right: 2.363rem;
    margin-left: 0.875rem;
    color: #ffffff;

    font-family: 'Roboto', sans-serif;

    &::placeholder {
      color: #ffffff;
    }
  }

  button {
    background: none;
    border: none;
    width: 1rem;
    height: 1rem;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const WrraperAddress = styled.div`
  font-size: 0.8rem;

  p + p {
    padding-top: 0.5rem;
  }
`;
