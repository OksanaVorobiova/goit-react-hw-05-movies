import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from 'api/getDetails';

export const FilmDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [filmDetails, setFilmDetails] = useState({});

  useEffect(() => {
    async function loadFilmDetails(id) {
      try {
        // console.log(id);
        const response = await getDetails(id);
        //console.log(response);

        response ? setFilmDetails({ ...response }) : console.log('error');
        //
        //console.log(filmDetails);
      } catch (error) {
        console.log(error);
      }
    }

    /*  */

    loadFilmDetails(id);
  }, [id]);

  //console.log(filmDetails);
  const { overview, title, vote_average, genres, poster_path } = filmDetails;

  return (
    <main>
      <button type="button">Go back</button>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <h1>{title}</h1>
        <p>User score: {`${Math.round(vote_average * 10)}%`} </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
        <p></p>
      </section>
      <section>
        <h1>Additional information</h1>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
};
