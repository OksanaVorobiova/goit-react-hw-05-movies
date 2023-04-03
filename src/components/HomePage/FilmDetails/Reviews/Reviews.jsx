import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getInfo';
import { ReviewsList } from './Reviews.styled';
import { Spinner } from 'components/Spinner/Spinner';
import NotFound from 'pages/NotFound/NotFound';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    async function loadReviews(id) {
      try {
        setStatus(STATUS.PENDING);
        const response = await getReviews(id);

        if (response.length > 0) {
          setReviews([...response]);
          setStatus(STATUS.RESOLVED);
        } else {
          setStatus(STATUS.IDLE);
          Notify.info('No reviews');
        }
      } catch (error) {
        console.log(error);
        setStatus(STATUS.REJECTED);
      }
    }

    loadReviews(id);
  }, [id]);

  return (
    <>
      {status === STATUS.PENDING && <Spinner />}
      {status === STATUS.RESOLVED && (
        <ReviewsList>
          {reviews.length > 0 ? (
            reviews.map(({ author, content, created_at }) => (
              <li key={created_at}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>No reviews</p>
          )}
        </ReviewsList>
      )}
      {status === STATUS.REJECTED && <NotFound />}
    </>
  );
};

export default Reviews;
