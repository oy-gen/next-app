import styled from 'styled-components';
import CardsWrapper from '../components/CardsWrapper';
import Nav from '../components/Nav';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <Title>Hallo Leute</Title>
      <Form></Form>
      <CardsWrapper></CardsWrapper>
      <Nav></Nav>
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
