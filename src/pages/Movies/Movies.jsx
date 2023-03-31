import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFiltered } from 'api/getFiltered';
import { useSearchParams } from 'react-router-dom';

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
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films &&
          films.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
