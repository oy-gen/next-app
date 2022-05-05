import styled from "styled-components";

export default function CardsWrapper({ children }) {
  return <StyledCardsWrapper>{children}</StyledCardsWrapper>;
}

const StyledCardsWrapper = styled.div`
  max-width: calc(300px + 1.5rem);
  margin: auto;
`;
