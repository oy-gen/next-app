import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Button from "../components/Button.js";
import Card from "../components/Card";
import CardsWrapper from "../components/CardsWrapper";

export default function Home() {
  return (
    <>
      <Title>Hallo Leute</Title>
      <Button>Characters</Button>
      <Button>Episodes</Button>
      <CardsWrapper>
        <Card>Character 1</Card>
      </CardsWrapper>
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
