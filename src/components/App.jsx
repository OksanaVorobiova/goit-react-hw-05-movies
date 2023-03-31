import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const FilmDetails = lazy(() => import('./HomePage/FilmDetails/FilmDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('./HomePage/FilmDetails/Cast/Cast'));
const Reviews = lazy(() => import('./HomePage/FilmDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
