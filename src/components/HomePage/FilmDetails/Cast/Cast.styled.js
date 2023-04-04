import styled from 'styled-components';

export const CastList = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // gap: 10px;
  padding: 20px;
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
