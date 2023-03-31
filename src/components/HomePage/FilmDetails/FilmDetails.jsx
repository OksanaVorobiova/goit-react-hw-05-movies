import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from 'api/getDetails';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FilmDetailsSection } from './FilmDetails.styled';
import { BackBtn } from './FilmDetails.styled';

const FilmDetails = () => {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function loadFilmDetails(id) {
      try {
        const response = await getDetails(id);

        response ? setFilmDetails({ ...response }) : console.log('error');
      } catch (error) {
        console.log(error);
      }
    }

    loadFilmDetails(id);
  }, [id]);

  const { overview, title, vote_average, genres, poster_path } = filmDetails;

  return (
    <main>
      <FilmDetailsSection>
        <section>
          <div>
            <BackBtn to={backLink.current}>Go back</BackBtn>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
            />
          </div>
          <div>
            <h1>{title}</h1>
            <p>User score: {`${Math.round(vote_average * 10)}%`} </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
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
        <Suspense>
          <Outlet />
        </Suspense>
      </FilmDetailsSection>
    </main>
  );
};

export default FilmDetails;
