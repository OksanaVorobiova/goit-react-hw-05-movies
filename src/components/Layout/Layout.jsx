import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Page } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <Page to="/">Home</Page>
            </li>
            <li>
              <Page to="/movies">Movies</Page>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
