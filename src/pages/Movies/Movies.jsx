import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFiltered } from 'api/getFiltered';
import { useSearchParams } from 'react-router-dom';
import { MoviesPage } from './Movies.styled';
import {
  TrendingFilmsList,
  StyledFilmLink,
} from 'components/HomePage/TrendingFilms/TrendingFilms.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useSearchParams();
  const queryValue = query.get('query') ?? '';

  const handleChange = e => {
    const inputValue = e.currentTarget.value.trim();

    inputValue ? setQuery({ query: inputValue }) : setQuery({});
  };

  const loadFilteredFilms = async queryValue => {
    const response = await getFiltered(queryValue);
    setFilms([...response]);
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
      <TrendingFilmsList>
        {films &&
          films.map(({ title, id }) => (
            <li key={id}>
              <StyledFilmLink to={`${id}`}>{title}</StyledFilmLink>
            </li>
          ))}
      </TrendingFilmsList>
    </MoviesPage>
  );
};

export default Movies;
