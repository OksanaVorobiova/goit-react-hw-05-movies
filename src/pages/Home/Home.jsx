import { getTrending } from 'api/getInfo';
import { useEffect, useState } from 'react';
import { TrendingFilms } from 'components/HomePage/TrendingFilms/TrendingFilms';
import { HomePage } from './Home.styled';
import { Spinner } from 'components/Spinner/Spinner';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    async function loadFilms() {
      try {
        setStatus(STATUS.PENDING);
        const response = await getTrending();
        // console.log(response);
        if (response.length > 0) {
          setFilms([...response]);
          setStatus(STATUS.RESOLVED);
        } else {
          setStatus(STATUS.REJECTED);
        }
        // response ?  : console.log('no films today');
        //console.log(films);
      } catch (error) {
        console.log(error.message);
        setStatus(STATUS.REJECTED);
      }
    }

    loadFilms();
  }, []);

  return (
    <main>
      <HomePage>
        <h1>Trending today</h1>
        {status === STATUS.PENDING && <Spinner />}
        {status === STATUS.RESOLVED && <TrendingFilms films={films} />}
        {status === STATUS.REJECTED && <div>Error</div>}
      </HomePage>
    </main>
  );
};

export default Home;
