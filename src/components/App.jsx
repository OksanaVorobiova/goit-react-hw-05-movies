import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { FilmDetails } from './HomePage/FilmDetails';
import { Cast } from './HomePage/Cast';
import { Reviews } from './HomePage/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
