import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Button from "../components/Button.js";

export default function Home() {
  return (
    <>
      <Title>Hallo Leute</Title>
      <Button>Characters</Button>
      <Button>Episodes</Button>
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
