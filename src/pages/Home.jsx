import { getTrending } from 'api/getPopular';
import { useEffect, useState } from 'react';
import { TrendingFilms } from 'components/HomePage/TrendingFilms';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      try {
        const response = await getTrending();
        // console.log(response);
        response ? setFilms([...response]) : console.log('no films today');
        //console.log(films);
      } catch (error) {
        console.log(error);
      }
    }

    loadFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingFilms films={films} />
    </main>
  );
};
