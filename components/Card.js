import styled from "styled-components";

export default function Card({ children }) {
  return (
    <StyledCard>
      <h2>{children}</h2>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border: 3px solid hotpink;
  border-radius: 1rem;
  color: white;
  gap: 5px;
`;
