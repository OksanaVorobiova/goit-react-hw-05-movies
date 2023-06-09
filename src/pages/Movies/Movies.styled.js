import styled from 'styled-components';

export const MoviesPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 60px;
  //padding: 15px 20px;
  //background-color: #fef6f2;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 15px;

  form {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin: 0px;
    padding: 0px;
    align-items: center;
    gap: 7px;
    margin: 0 auto;

    input {
      padding: 4px;
      border: 1px solid #ef9b70;
      border-radius: 8px;
    }

    button {
      background-color: #f18a63;
      width: 100px;
      border: 1px solid #ef9b70;
      border-radius: 8px;
      padding: 4px;
      font-weight: 600;
      color: black;
    }
  }
`;
