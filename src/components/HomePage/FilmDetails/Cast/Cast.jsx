import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { getCast } from 'api/getInfo';
import { CastList } from './Cast.styled';
import { Spinner } from 'components/Spinner/Spinner';
import NotFound from 'pages/NotFound/NotFound';
import defaultImg from '../../../../images/placeholder.svg';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { id } = useParams();
  const [actor, setActor] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    async function loadCast(id) {
      try {
        setStatus(STATUS.PENDING);
        const response = await getCast(id);

        if (response.length > 0) {
          setActor([...response]);
          setStatus(STATUS.RESOLVED);
        } else {
          setStatus(STATUS.IDLE);
          Notify.info('No cast info');
        }
      } catch (error) {
        console.log(error);
        setStatus(STATUS.REJECTED);
      }
    }

    loadCast(id);
  }, [id]);

  //const { name, character, profile_path, cast_id } = actor;

  return (
    <>
      {status === STATUS.PENDING && (
        <CastList>
          <Spinner />
        </CastList>
      )}
      {status === STATUS.RESOLVED && (
        <CastList>
          {actor &&
            actor.map(({ name, character, profile_path, cast_id }) => (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="200"
                  height="300"
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
        </CastList>
      )}
      {status === STATUS.REJECTED && <NotFound />}
    </>
  );
};

export default Cast;
