import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style-type: none;
  background-color: #fef6f2;
  max-width: 100%;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    padding: 6px;
    border: 3px dashed #ef9b70;
    border-radius: 8px;

    p:first-child {
      font-weight: 600;
    }
  }
`;
