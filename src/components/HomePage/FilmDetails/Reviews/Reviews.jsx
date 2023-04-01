import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getReviews';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews(id) {
      try {
        const response = await getReviews(id);
        console.log(response);
        setReviews([...response]);
      } catch (error) {
        console.log(error);
      }
    }

    loadReviews(id);
  }, [id]);

  return (
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
  );
};

export default Reviews;
