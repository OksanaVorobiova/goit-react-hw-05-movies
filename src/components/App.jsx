import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { FilmDetails } from './HomePage/FilmDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
};
