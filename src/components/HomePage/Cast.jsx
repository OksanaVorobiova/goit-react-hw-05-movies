import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'api/getCast';

export const Cast = () => {
  const { id } = useParams();
  const [actor, setActor] = useState([]);

  useEffect(() => {
    async function loadCast(id) {
      try {
        const response = await getCast(id);
        console.log(response);
        setActor([...response]);
      } catch (error) {
        console.log(error);
      }
    }

    loadCast(id);
  }, [id]);

  return (
    <ul>
      {actor &&
        actor.map(({ name, character, profile_path, cast_id }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};
