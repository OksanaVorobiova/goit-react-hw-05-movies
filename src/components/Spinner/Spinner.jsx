import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './Spinner.styled';

export const Spinner = () => {
  return (
    <Container>
      <ThreeCircles
        height="70"
        width="70"
        color="#f18a63;"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </Container>
  );
};
