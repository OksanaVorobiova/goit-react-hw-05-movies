//import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TrendingFilmsList, StyledFilmLink } from './TrendingFilms.styled';

export const TrendingFilms = ({ films }) => {
  const location = useLocation();

  return (
    <TrendingFilmsList>
      {films &&
        films.map(({ id, original_title }) => (
          <li key={id}>
            <StyledFilmLink to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </StyledFilmLink>
          </li>
        ))}
    </TrendingFilmsList>
  );
};
