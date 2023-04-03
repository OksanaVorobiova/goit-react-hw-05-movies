import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getFiltered } from 'api/getInfo';
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
  const location = useLocation();

  const updateQueryValue = value => {
    const newQuery = value !== '' ? { query: value } : {};
    setQuery(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.search.value);
    const value = e.currentTarget.elements.search.value;
    updateQueryValue(value);
  };

  useEffect(() => {
    const loadFilms = async () => {
      try {
        setStatus(STATUS.PENDING);
        const response = await getFiltered(queryValue);

        if (response.length > 0) {
          setStatus(STATUS.RESOLVED);
          setFilms([...response]);
        } else {
          setStatus(STATUS.IDLE);
          Notify.info('No films by this query');
        }
      } catch (error) {
        setStatus(STATUS.REJECTED);
      }
    };

    if (queryValue) {
      loadFilms();
    }
  }, [queryValue]);

  /*  const handleChange = e => {
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
  }; */

  return (
    <MoviesPage>
      <form onSubmit={handleSubmit}>
        <input name="search" />
        <button type="submit">Search</button>
      </form>
      {status === STATUS.PENDING && <Spinner />}
      {status === STATUS.RESOLVED && (
        <TrendingFilmsList>
          {films &&
            films.map(({ title, id }) => (
              <li key={id}>
                <StyledFilmLink to={`${id}`} state={{ from: location }}>
                  {title}
                </StyledFilmLink>
              </li>
            ))}
        </TrendingFilmsList>
      )}
      {status === STATUS.REJECTED && <NotFound />}
    </MoviesPage>
  );
};

export default Movies;
