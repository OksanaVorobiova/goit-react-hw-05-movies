import { getTrending } from 'api/getPopular';
import { useEffect, useState } from 'react';
import { TrendingFilms } from 'components/HomePage/TrendingFilms/TrendingFilms';
import { HomePage } from './Home.styled';

const Home = () => {
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
      <HomePage>
        <h1>Trending today</h1>
        <TrendingFilms films={films} />
      </HomePage>
    </main>
  );
};

export default Home;
