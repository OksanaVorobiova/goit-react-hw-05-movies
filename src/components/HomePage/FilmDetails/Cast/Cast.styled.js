import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fef6f2;
  max-width: 100vw;
  flex-wrap: wrap;
  margin-top: 0;

  li {
    padding: 10px;

    p {
      margin-bottom: 0;
      text-align: center;
      font-weight: 500;
    }
  }
`;
