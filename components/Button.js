import styled from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: hotpink;
  border-style: none;
  color: black;
  border-radius: 50px;
  font-weight: bold;
  margin: 1rem;
  padding: 0.8rem 3rem;
  text-transform: uppercase;
`;
