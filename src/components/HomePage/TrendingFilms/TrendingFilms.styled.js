import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingFilmsList = styled.ul`
  list-style-type: none;
  max-width: 100%;
  margin: 20px 15px;
  padding: 10px;
  border: 3px dashed #ef9b70;
  border-radius: 8px;
  margin-top: 10px;

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
