import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FilmDetailsSection = styled.div`
  position: absolute;
  top: 60px;

  & > section {
    background-color: #fef6f2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    h1,
    p,
    h2,
    ul {
      margin-bottom: 0;
    }

    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      padding: 0;

      li {
        background-color: #f18a63;
        border-radius: 8px;
        padding: 6px;
        font-weight: 400;
      }
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;

      li {
        width: 100px;
        text-align: center;
        padding: 4px;

        a {
          color: black;
        }

        a:visited {
          color: #5b009a;
        }
      }
    }
  }
`;

export const BackBtn = styled(NavLink)`
  display: inline-block;
  background-color: #f18a63;
  border-radius: 8px;
  padding: 4px;
  max-width: 35%;
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: 500;
`;
