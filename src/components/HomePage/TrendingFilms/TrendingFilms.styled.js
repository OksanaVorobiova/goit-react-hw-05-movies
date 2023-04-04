import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingFilmsList = styled.ul`
  list-style-type: none;
  width: 90%;
  // box-sizing: border-box;
  margin: 0;
  padding: 10px;
  border: 3px dashed #ef9b70;
  border-radius: 8px;
  margin-top: 10px;
  //overflow: hidden;

  li {
    padding: 6px;
  }
`;

export const StyledFilmLink = styled(NavLink)`
  color: #732700;

  &.active {
    color: #730043;
  }
`;
