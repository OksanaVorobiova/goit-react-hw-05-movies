import { useState } from 'react';
import { Notify } from 'notiflix';
import { getFiltered } from 'api/getFiltered';
import { useSearchParams } from 'react-router-dom';
import { MoviesPage } from './Movies.styled';
import {
  TrendingFilmsList,
  StyledFilmLink,
} from 'components/HomePage/TrendingFilms/TrendingFilms.styled';
import { Spinner } from 'components/Spinner/Spinner';
import NotFound from 'pages/NotFound/NotFound';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [query, setQuery] = useSearchParams();
  const queryValue = query.get('query') ?? '';

  const handleChange = e => {
    const inputValue = e.currentTarget.value.trim();

    inputValue ? setQuery({ query: inputValue }) : setQuery({});
  };

  const loadFilteredFilms = async queryValue => {
    try {
      setStatus(STATUS.PENDING);
      const response = await getFiltered(queryValue);

      if (response.length > 0) {
        setFilms([...response]);
        setStatus(STATUS.RESOLVED);
      } else {
        setStatus(STATUS.IDLE);
        Notify.info('No films by this query');
      }
    } catch (error) {
      setStatus(STATUS.REJECTED);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.search);
    //const inputValue = e.currentTarget.elements.search.value.trim();

    //inputValue ? setQuery({ query: inputValue }) : setQuery({});
    //const queryValue = query.get('query') ?? '';
    // console.log(queryValue);
    loadFilteredFilms(queryValue);
  };

  return (
    <MoviesPage>
      <form onSubmit={handleSubmit}>
        <input name="search" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {status === STATUS.PENDING && <Spinner />}
      {status === STATUS.RESOLVED && (
        <TrendingFilmsList>
          {films &&
            films.map(({ title, id }) => (
              <li key={id}>
                <StyledFilmLink to={`${id}`}>{title}</StyledFilmLink>
              </li>
            ))}
        </TrendingFilmsList>
      )}
      {status === STATUS.REJECTED && <NotFound />}
    </MoviesPage>
  );
};

export default Movies;
