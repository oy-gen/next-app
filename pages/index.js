import Head from "next/head";
import Image from "next/image";
import styled, {css} from "styled-components";

export default function Home() {
  return <Title>Hallo Leute</Title>;
}

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;
