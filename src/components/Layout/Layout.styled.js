import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0 5px 5px #575557;
  position: fixed;
  width: 100vw;
  z-index: 20;
  background-color: #f18a63;

  nav {
    width: 100%;
  }

  nav > ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
  }
`;

export const Page = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: #5b009a;
  }
`;
