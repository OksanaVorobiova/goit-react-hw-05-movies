import { Link } from 'react-router-dom';

export const TrendingFilms = ({ films }) => {
  return (
    <ul>
      {films &&
        films.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        ))}
    </ul>
  );
};
